"use client";

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { isBefore, startOfDay, addDays, isAfter } from "date-fns";

import { SafeReservation, SafeUser } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
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
        .catch(() => {
          toast.error("Something went wrong.");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
      <div className="text-gray-500 text-sm mb-4">
        <p className="p-3 bg-gray-50 rounded-md border border-gray-200">
          <span className="font-medium">Note:</span> Cancellation is only
          allowed until one day before the guest&apos;s stay begins. After that, the
          reservation cannot be cancelled.
        </p>
      </div>
      <div className="mt-6 sm:mt-10 gap-4 sm:gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {reservations.map((reservation) => {
          // Parse the reservation dates - use startOfDay to remove time component for accurate date comparison
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

          // Check if trip is completed
          const tripCompleted = isAfter(today, endDate);

          // Determine action label based on status
          let actionLabel;
          if (canCancel) {
            actionLabel = "Cancel guest reservation";
          } else if (isOngoing) {
            actionLabel = undefined; // Optional: Add a contact action during the stay
          } else if (tripCompleted) {
            actionLabel = undefined; // No action for completed trips
          }

          return (
            <ListingCard
              key={reservation.id}
              data={reservation.listing}
              reservation={reservation}
              actionId={reservation.id}
              onAction={onCancel}
              disabled={deletingId === reservation.id}
              actionLabel={actionLabel}
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ReservationsClient;
