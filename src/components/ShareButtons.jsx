
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

function ShareButtons({ text }) {
  return (
    <div className="flex space-x-4">
      <WhatsappShareButton
        url="https://example.com" // Replace with the actual URL to share
        title={text}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        WhatsApp
      </WhatsappShareButton>
    </div>
  );
}

export default ShareButtons;
