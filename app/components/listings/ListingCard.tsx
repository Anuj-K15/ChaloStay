"use client";

import { useRouter } from "next/navigation";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import React, { useCallback, useMemo } from "react";
import { format, isAfter, isBefore, startOfDay } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  const reservationStatus = useMemo(() => {
    if (!reservation) {
      return null;
    }

    // Use current date without time component for accurate comparisons
    const today = startOfDay(new Date());
    const startDate = startOfDay(new Date(reservation.startDate));
    const endDate = startOfDay(new Date(reservation.endDate));

    // Check if today is after the end date
    if (isAfter(today, endDate)) {
      return "Completed";
    }
    // Check if today is the start date or between start and end dates
    else if (
      today.getTime() === startDate.getTime() ||
      (isAfter(today, startDate) &&
        (isBefore(today, endDate) || today.getTime() === endDate.getTime()))
    ) {
      return "Ongoing";
    }
    // Otherwise it's upcoming
    else {
      return "Upcoming";
    }
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="
    col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="Listing"
            src={data.imageSrc!}
            className="object-cover w-full h-full group-hover:scale-110
                transition"
          />
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-sm sm:text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500 text-xs sm:text-sm">
          {reservationDate || data.category}
        </div>
        {reservation && reservationStatus && (
          <div
            className={`text-xs sm:text-sm font-medium ${
              reservationStatus === "Completed"
                ? "text-gray-500"
                : reservationStatus === "Ongoing"
                ? "text-green-600"
                : "text-blue-600"
            }`}
          >
            Status: {reservationStatus}
          </div>
        )}
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold text-sm sm:text-base">₹ {price}</div>
          {!reservation && (
            <div className="font-light text-xs sm:text-sm">night</div>
          )}
        </div>
        {onAction && actionLabel && (
          <>
            <Button
              disabled={disabled}
              small
              label={actionLabel}
              onClick={handleCancel}
            />
            <p className="text-xs text-gray-400 mt-1">
              Cancellation allowed until 1 day before arrival.
            </p>
          </>
        )}
        {reservation && !actionLabel && reservationStatus === "Upcoming" && (
          <p className="text-xs text-amber-500 mt-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Can't cancel - less than 24h before arrival
          </p>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
