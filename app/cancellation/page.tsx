"use client";

import { useEffect } from "react";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import ClientOnly from "@/app/components/ClientOnly";
import AnimateWrapper from "@/app/components/AnimateWrapper";

const CancellationPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ClientOnly>
      <Container>
        <AnimateWrapper>
          <div className="max-w-4xl mx-auto my-12">
            <Heading
              title="Cancellation Policy"
              subtitle="Information about our cancellation options and procedures"
              center={false}
            />

            <div className="mt-8 space-y-10">
              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Cancellation Guidelines
                </h2>
                <p className="text-gray-600 mb-4">
                  At ChaloStay, we understand that plans can change. To provide
                  flexibility while ensuring fairness to our hosts, our
                  cancellation policy allows guests to cancel their reservations
                  up until the day before the scheduled check-in date.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                  <p className="text-sm text-blue-700 font-medium">
                    You may cancel your reservation without penalty until 11:59
                    PM the day before your scheduled check-in.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Reservation Status Timeline
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <div className="w-10 h-10 flex items-center justify-center text-emerald-700 font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-gray-800">
                        Upcoming
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Reservations that have not yet started. During this
                        period, cancellations are permitted until the day before
                        check-in.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <div className="w-10 h-10 flex items-center justify-center text-amber-700 font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-gray-800">
                        Ongoing
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Reservations that are currently in progress (from the
                        check-in date through the check-out date). Cancellations
                        are not permitted during this period.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <div className="w-10 h-10 flex items-center justify-center text-purple-700 font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-gray-800">
                        Completed
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Reservations that have ended (after the check-out date).
                        These reservations cannot be cancelled.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Cancellation Process
                </h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-600">
                  <li>
                    Navigate to your{" "}
                    <span className="font-medium text-gray-800">Trips</span>{" "}
                    page if you're a guest, or{" "}
                    <span className="font-medium text-gray-800">
                      Reservations
                    </span>{" "}
                    page if you're a host.
                  </li>
                  <li>Find the reservation you wish to cancel.</li>
                  <li>
                    If the reservation is still in "Upcoming" status, you will
                    see a "Cancel" button.
                  </li>
                  <li>Click the "Cancel" button and confirm your decision.</li>
                  <li>
                    You will receive an email confirmation of your cancellation.
                  </li>
                </ol>

                <div className="bg-rose-50 border-l-4 border-rose-500 p-4 my-6">
                  <p className="text-sm text-rose-700">
                    <span className="font-medium">Important:</span> Once a
                    reservation becomes "Ongoing" (starting on the check-in
                    date), cancellations are not permitted through our standard
                    process. For extenuating circumstances, please contact our
                    support team directly.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Refund Policy
                </h2>
                <p className="text-gray-600 mb-4">
                  For eligible cancellations (before the day of check-in), you
                  will receive a full refund of your payment. The refund will be
                  processed to your original payment method within 5-7 business
                  days.
                </p>

                <table className="min-w-full bg-white mt-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                        Cancellation Timing
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                        Refund Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        Up to day before check-in
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        100% refund
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        Day of check-in or later
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        No refund available
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Contact Support
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about our cancellation policy or need
                  assistance with a cancellation due to extenuating
                  circumstances, please contact our support team:
                </p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span>{" "}
                    support@chalostay.com
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Phone:</span> +91 9876543210
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Hours:</span> Monday to
                    Friday, 9 AM - 6 PM IST
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 mb-6 text-center">
              <p className="text-sm text-gray-500">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </AnimateWrapper>
      </Container>
    </ClientOnly>
  );
};

export default CancellationPage;
