"use client";

import { useRouter } from "next/navigation";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";
import { isBefore, startOfDay, addDays, isAfter } from "date-fns";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="text-gray-500 text-sm mb-4">
        <p className="p-3 bg-gray-50 rounded-md border border-gray-200">
          <span className="font-medium">Cancellation Policy:</span> You may
          cancel your reservation free of charge until one day before your trip
          begins. After that, cancellations are not permitted.
        </p>
      </div>
      <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
        {reservations.map((reservation) => {
          // Parse the reservation dates - use startOfDay to remove time component
          const startDate = startOfDay(new Date(reservation.startDate));
          const endDate = startOfDay(new Date(reservation.endDate));
          const today = startOfDay(new Date());

          // Only show cancel button if today is before the day before trip starts
          const dayBeforeTrip = addDays(startDate, -1);
          const canCancel = isBefore(today, dayBeforeTrip);

          // Check if today is the start date or between start and end dates
          const isOngoing =
            today.getTime() === startDate.getTime() ||
            (isAfter(today, startDate) &&
              (isBefore(today, endDate) ||
                today.getTime() === endDate.getTime()));

          return (
            <ListingCard
              key={reservation.id}
              data={reservation.listing}
              reservation={reservation}
              actionId={reservation.id}
              onAction={onCancel}
              disabled={deletingId === reservation.id}
              actionLabel={canCancel ? "Cancel reservation" : undefined}
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default TripsClient;
