import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const DrawerData = {
    menu: {
        Home: {
            icon: HomeIcon,
            route: '/'
        },
        Resume: {
            icon: DescriptionIcon,
            route: '/resume'
        },
        Works: {
            icon: WorkIcon,
            route: '/works'
        },
        
        'Contact me': {
            icon: MailIcon,
            route: '/contactme'
        }
    },
    social: {
        GitHub: {
            route: 'https://github.com/Shashank384?tab=repositories',
            icon: GitHub
        },
        LinkedIn: {
            route: 'https://www.linkedin.com/in/shashank-kumar-4aaa2a16b/',
            icon: LinkedIn
        },
        'Git-Grid': {
            route: 'https://github.com/Shashank384',
            icon: GitHub
        },
        Instagram: {
            route: 'https://www.instagram.com/shashank_kumar20/',
            icon: InstagramIcon
        }
    }
}

export default DrawerData