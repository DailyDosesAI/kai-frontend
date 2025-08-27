"use client";

export default function DeleteAccountRequestPage() {
  const handleOpen = () => {
    try {
      window.location.href = "kaistory://app/account/delete";
    } catch (e) {
      // ignore
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-2 text-black">Open in Kai app</h1>
        <p className="text-gray mb-6">
          If the app doesn’t open automatically, tap the button below.
        </p>
        <button onClick={handleOpen} className="bg-blue text-white rounded-full px-5 py-3 w-full hover:bg-blue/90 transition-colors">
          Open Kai
        </button>
      </div>
    </div>
  );
}




