"use client";

type GoogleFundingChoices = {
  callbackQueue?: Array<() => void>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFundingChoices;
  }
}

export default function PrivacySettingsButton({ className = "" }: { className?: string }) {
  const reopenPrivacyChoices = () => {
    window.googlefc ??= { callbackQueue: [] };
    window.googlefc.callbackQueue ??= [];

    const showRevocationMessage = window.googlefc.showRevocationMessage;
    window.googlefc.callbackQueue.push(
      showRevocationMessage ?? (() => window.googlefc?.showRevocationMessage?.()),
    );
  };

  return (
    <button type="button" onClick={reopenPrivacyChoices} className={className}>
      Privacy and cookie settings
    </button>
  );
}
