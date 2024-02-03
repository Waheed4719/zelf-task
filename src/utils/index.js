import InstagramIcon from '../assets/images/instagram.svg'
import TiktokIcon from '../assets/images/tiktok.svg'


export const formatNumber = (number) => {
    if (number > 999 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'K';
    } else if (number > 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    }
    return number;

}

export const getIcon = (platform = "instagram") => {
    switch (platform) {
        case 'instagram':
            return InstagramIcon
        case 'tiktok':
            return TiktokIcon
        default:
            return InstagramIcon
    }

}