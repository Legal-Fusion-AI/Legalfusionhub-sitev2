import { siteConfig } from "@/lib/site-config";

export function BookingWidget() {
  return (
    <div className="booking-panel">
      <iframe
        src={siteConfig.booking.embedSrc}
        id={siteConfig.booking.iframeId}
        title="Book a live demo"
        scrolling="no"
        style={{ width: "100%", border: "none", overflow: "hidden" }}
      />
    </div>
  );
}
