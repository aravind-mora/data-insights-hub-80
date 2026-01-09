const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Aravind. Built with passion for data.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
