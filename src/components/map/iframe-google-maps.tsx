import sgMaps from "@/assets/styles/map/iframe-google-maps.module.css"

interface IframeGoogleMapsProps {
    heigth: string;
    width: string;
}

export const IframeGoogleMaps = (props: IframeGoogleMapsProps) => {
    return(
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.9399881656791!2d27.480435075595814!3d-11.640447383919005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723937ac6d8b37%3A0xb85674e8815a1b4!2s20%20Av.%20Mpolo%2C%20Lubumbashi%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2ske!4v1727664312716!5m2!1sen!2ske"
        width={props.width}
        height={props.heigth}
        className={sgMaps.sgIframeGoogleMaps}
        loading="lazy"
        allowFullScreen
      />
    );
};