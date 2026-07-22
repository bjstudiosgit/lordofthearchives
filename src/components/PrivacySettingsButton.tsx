"use client";

type GoogleFundingChoices = {
  callbackQueue?: Array<(() => void) | { CONSENT_API_READY: () => void }>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFundingChoices;
  }
}

export default function PrivacySettingsButton({ className = "" }: { className?: string }) {
  const reopenPrivacyChoices = () => {
    const googlefc = (window.googlefc ??= { callbackQueue: [] });
    const callbackQueue = (googlefc.callbackQueue ??= []);

    if (googlefc.showRevocationMessage) {
      callbackQueue.push(googlefc.showRevocationMessage);
      return;
    }

    callbackQueue.push({
      CONSENT_API_READY: () => window.googlefc?.showRevocationMessage?.(),
    });
  };

  return (
    <button type="button" onClick={reopenPrivacyChoices} className={className}>
      Privacy and cookie settings
    </button>
  );
}
