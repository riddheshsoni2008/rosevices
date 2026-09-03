import { NextResponse } from "next/server";
import { createBooking, getAllBookings } from "@/models/Booking";

export async function GET() {
  try {
    const bookings = await getAllBookings();
    return NextResponse.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings from MongoDB" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, address, serviceType, preferredTime, comments } = body;

    if (!name || !phone || !address) {
      return NextResponse.json(
        { success: false, error: "Missing required booking details (name, phone, address)" },
        { status: 400 }
      );
    }

    const newBooking = await createBooking({
      name,
      phone,
      address,
      serviceType: serviceType || "General Diagnostic & Repair",
      preferredTime: preferredTime || "Immediate",
      comments: comments || "",
      status: "Pending",
    });

    return NextResponse.json({
      success: true,
      ticketId: newBooking?.ticketId,
      message: "Booking confirmed and saved to MongoDB Atlas successfully",
      data: newBooking,
    });
  } catch (error: any) {
    console.error("Booking creation error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save booking to MongoDB database" },
      { status: 500 }
    );
  }
}
