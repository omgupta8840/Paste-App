
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

function ShareButtons({ text }) {
  const shareUrl = "https://example.com"; // Replace with the actual URL to share

  return (
    <div className="flex flex-row gap-4">
      {/* WhatsApp Share Button */}
      <WhatsappShareButton
        url={shareUrl}
        title={text}
        className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
      >
        WhatsApp
      </WhatsappShareButton>

    </div>
  );
}

export default ShareButtons;
