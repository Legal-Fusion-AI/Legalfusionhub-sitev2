import { siteConfig } from "@/lib/site-config";

export function InquiryEmbed() {
  const { embedSrc, iframeId, formId, name } = siteConfig.inquiry;

  return (
    <div className="inquiry-embed">
      <iframe
        src={embedSrc}
        id={iframeId}
        title={name}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={name}
        data-height="auto"
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
