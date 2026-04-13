
const buildWhatsAppUrl = (message: string) => {
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/50488203559?text=Hola%2C%20quiero%20información%20de%20${encodedMessage}`;
};

export default buildWhatsAppUrl;