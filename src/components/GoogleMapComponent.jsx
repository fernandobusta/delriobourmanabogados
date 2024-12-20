'use client'

export default function GoogleMapComponent({ className }) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.397263964421!2d-4.430148515836812!3d36.71574272978055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7912e0cd263%3A0x20a979cb30eccae5!2sC.%20Linaje%2C%203%2C%20Distrito%20Centro%2C%2029001%20M%C3%A1laga!5e0!3m2!1sen!2ses!4v1734624037022!5m2!1sen!2ses"
      width="600"
      height="600"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Despacho"
      className="absolute left-0 top-0 h-full w-full rounded-bl-lg rounded-br-lg rounded-tl-3xl rounded-tr-lg border-0"
    ></iframe>
  )
}
