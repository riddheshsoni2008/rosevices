import { getBookingsCollection } from "../lib/db.ts";

export interface IBookingRecord {
  ticketId: string;
  name: string;
  phone: string;
  serviceType: string;
  preferredTime: string;
  address: string;
  comments?: string;
  status: "Pending" | "Completed" | "Cancelled";
  createdAt: string;
}

export async function createBooking(data: Partial<IBookingRecord>): Promise<IBookingRecord | null> {
  const collection = await getBookingsCollection();
  const ticketId = data.ticketId || "JAL-" + Math.floor(100000 + Math.random() * 900000);
  
  const record: IBookingRecord = {
    ticketId,
    name: data.name || "Customer",
    phone: data.phone || "",
    serviceType: data.serviceType || "RO Diagnostic & Repair",
    preferredTime: data.preferredTime || "Immediate",
    address: data.address || "",
    comments: data.comments || "",
    status: data.status || "Pending",
    createdAt: data.createdAt || new Date().toISOString(),
  };

  if (collection) {
    await collection.insertOne({ ...record });
    console.log(`✅ MongoDB: Inserted booking ${ticketId} into 'bookings' collection!`);
  }

  return record;
}

export async function getAllBookings(): Promise<IBookingRecord[]> {
  const collection = await getBookingsCollection();
  if (collection) {
    return await collection.find({}).sort({ createdAt: -1 }).toArray();
  }
  return [];
}
