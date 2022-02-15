import L from 'next/link';
import { trackEvent } from 'utils/analytics';

const Footer = ({ locales }) => {
  const Link = props => <L {...props}>{props.children}</L>;

  return (
    <footer className='bg-black p-6'>
      <section className='sm:p-12 md:pl-32 md:pr-32 mb-4 mt-4'>
        <p className='text-white text-4xl sm:text-5xl font-bold'>
          {locales.cta}
        </p>
        <Link href='/contact'>
          <a
            onClick={() => trackEvent('contact clicked')}
            className='footer-cta text-4xl sm:text-5xl mt-6 font-bold'
          >
            {locales.ctabtn}
          </a>
        </Link>
      </section>
      <p className='sm:pl-12 text-gray-400 md:pl-32 md:pr-32 mb-2 text-xl'>
        {`${locales.copyrigth} - `}
        <L href='/privacy'>
          <a className='underline hover:no-underline'>{locales.privacy}</a>
        </L>
      </p>
    </footer>
  );
};

export default Footer;
