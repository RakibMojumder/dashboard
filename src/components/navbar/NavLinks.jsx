const navLinks = [
  {
    label: "Documents",
  },
  {
    label: "News",
  },
  {
    label: "Payslip",
  },
  {
    label: "Report",
  },
];

const NavILinks = () => {
  return (
    <div className="flex-1 hidden sm:flex items-center">
      {navLinks.map((item, index) => (
        <div key={index + item.label} className="px-5 text-sm">
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default NavILinks;
