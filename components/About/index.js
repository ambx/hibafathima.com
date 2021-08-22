import styles from "./styles.module.scss";
import AboutImage from "../About-image/index";

export default function About() {
  return (
    <div className={styles.container}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam
        nulla porttitor massa id neque aliquam. Posuere lorem ipsum dolor sit
        amet. Morbi blandit cursus risus at. Sem nulla pharetra diam sit.
        Commodo ullamcorper a lacus vestibulum sed arcu. Ut tristique et egestas
        quis ipsum. Sollicitudin nibh sit amet commodo nulla facilisi. Donec ac
        odio tempor orci dapibus ultrices in. Eu scelerisque felis imperdiet
        proin fermentum leo vel orci. Dis parturient montes nascetur ridiculus
        mus mauris. Cras pulvinar mattis nunc sed blandit libero volutpat.
        Mattis enim ut tellus elementum sagittis vitae. Volutpat est velit
        egestas dui id ornare arcu odio ut. Vulputate eu scelerisque felis
        imperdiet proin. Cras adipiscing enim eu turpis egestas pretium. Cursus
        metus aliquam eleifend mi in nulla. Et tortor consequat id porta nibh
        venenatis cras sed. Consectetur adipiscing elit pellentesque habitant
        morbi tristique senectus. In vitae turpis massa sed elementum tempus
        egestas. Laoreet non curabitur gravida arcu ac tortor dignissim. Nec
        feugiat nisl pretium fusce. Aenean et tortor at risus viverra adipiscing
        at. Risus ultricies tristique nulla aliquet enim tortor at. Elementum
        nibh tellus molestie nunc non.
      </p>
      <br />
      <AboutImage />
    </div>
  );
}
