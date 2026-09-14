import { NextRequest, NextResponse } from "next/server";
import { whatsappBookingHref } from "@/lib/site";

const MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
const DAYS = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function formatDateLabel(value: string) {
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return value;
  const date = new Date(y, m - 1, d);
  return `${d} ${MONTHS[date.getMonth()]} ${y} ${DAYS[date.getDay()]}`;
}

export function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date")?.trim() ?? "";
  const time = req.nextUrl.searchParams.get("time")?.trim() ?? "";

  if (!date || !time) {
    return NextResponse.redirect(new URL("/#randevu", req.url));
  }

  return NextResponse.redirect(whatsappBookingHref(formatDateLabel(date), time));
}
