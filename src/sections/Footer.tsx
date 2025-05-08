// components/Footer.tsx
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 sm:px-8 mt-12">
      <p className="text-center font-bold">Punjab Trump. {year}&copy; </p>
    </footer>
  );
};

export default Footer;
