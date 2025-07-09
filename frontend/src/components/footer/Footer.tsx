import { Anchor, Footer as MFooter, Group, Image } from "@mantine/core";

// An array to hold all your social links, making it easy to manage
const socialLinks = [
  {
    href: "https://vimeo.com/whatifcreativestudio",
    src: "/img/icons/icon-vimeo.svg",
    alt: "Vimeo",
  },
  {
    href: "https://instagram.com/whatifcreativestudio",
    src: "/img/icons/icon-instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/whatifcreativestudio",
    src: "/img/icons/icon-linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://discord.gg/Gx5buYS4Kn",
    src: "/img/icons/icon-discord.svg",
    alt: "Discord",
  },
  {
    href: "https://www.youtube.com/@whatifcreativestudio", // Note: This URL might be incorrect
    src: "/img/icons/icon-youtube.svg",
    alt: "YouTube",
  },
  {
    href: "https://x.com/whatifcs",
    src: "/img/icons/icon-x.svg",
    alt: "X",
  },
  {
    href: "https://facebook.com/whatifcreativestudio",
    src: "/img/icons/icon-facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.threads.net/@whatifcreativestudio",
    src: "/img/icons/icon-threads.svg",
    alt: "Threads",
  },
  {
    href: "mailto:info@whatif.ae",
    src: "/img/icons/icon-email.svg",
    alt: "Email",
  },
];

const Footer = () => {
  return (
    // Replicates the styling from your footer CSS using Mantine's sx prop
    <MFooter
      height={60}
      sx={{
        backgroundColor: "#009dde",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        width: '100%'
      }}
    >
      {/* Group is a Mantine component for creating flex containers */}
      <Group spacing="xl">
        {socialLinks.map((link) => (
          // We loop over the array to create each icon link
          <Anchor key={link.href} href={link.href} target="_blank">
            <Image src={link.src} alt={link.alt} width={30} />
          </Anchor>
        ))}
      </Group>
    </MFooter>
  );
};

export default Footer;