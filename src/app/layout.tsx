import './globals.scss';

export const metadata = {
  title: 'UralSteel - Precision Manufacturing For A Better Future',
  description: 'Delivering high-quality steel products with innovation, reliability and sustainable practices. Metallon Steel Group - trusted by industry leaders worldwide.',
  keywords: 'steel manufacturing, precision steel, industrial steel, sustainable steel production, UralSteel, Metallon Steel',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {props.children}
      </body>
    </html>
  );
}