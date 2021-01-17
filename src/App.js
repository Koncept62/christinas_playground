import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
  Font,
  Link,
} from "@react-pdf/renderer";

import styled from "@react-pdf/styled-components";

import numeral from "numeral";

// get the ttf url at https://nikoskip.me/gfonts.php for http://fonts.googleapis.com/css?family=
Font.register({
  family: "LibreBaskerville",
  src:
    "http://fonts.gstatic.com/s/librebaskerville/v9/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxYaC82U.ttf",
});

const Box = styled(View)`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background-color: ${(props) => props.backgroundColor};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.align ? props.align : "stretch")};
  /* border: ${(props) => props.border}; */
`;

const PageContainer = styled(Box)`
  position: absolute;
  font-family: LibreBaskerville;
  font-size: 12px;
`;

const LogoContainer = styled(Box)`
  position: absolute;
  top: 20;
  left: 20;
  width: 64px;
  height: 64px;
`;

const RightContainer = styled(Box)`
  position: absolute;
  margin-top: 40;
  align-self: flex-end;
  color: white;
`;

const DescriptionContainer = styled(Box)`
  padding: 12px;
`;

const FeaturesContainer = styled(Box)``;

const GalleryImage = styled(Image)`
  width: 50%;
  height: 50%;
`;

const SecondaryImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const IconsContainer = styled(Box)`
  background-color: white;
  opacity: 0.5;
  margin-top: 8px;
`;

const FeaturesInsideContainer = styled(Box)`
  border-top: 1px solid #bd7f80;
`;

const TextBlock = ({ children, style, align, stretch, size, color }) => {
  let fontSize = "12pt";

  switch (size) {
    case "small":
      fontSize = "10pt";
      break;
    case "large":
      fontSize = "14pt";
      break;
    case "xlarge":
      fontSize = "24pt";
      break;
    default:
      fontSize = "12pt";
      break;
  }

  const s = {
    ...(color && { color }), // optionally add color
    textAlign: align ? align : "left",
    fontStretch: stretch ? stretch : "normal",
    fontSize,
    ...style,
  };

  return <Text style={s}>{children}</Text>;
};

const Button = ({
  children,
  to,
  width,
  height,
  backgroundColor,
  textColor,
  style,
}) => (
  <Box
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    style={{ ...style, padding: "8px 8px" }}
    align="center"
    justify="center"
  >
    <TextBlock color={textColor}>
      <Link src={to} style={{ textDecoration: "none" }}>
        {children}
      </Link>
    </TextBlock>
  </Box>
);

const Feature = ({ icon, title }) => (
  <Box direction="row">
    {icon ? (
      <Image src={icon} style={{ width: "32px", height: "32px" }} />
    ) : (
      <React.Fragment />
    )}
    <TextBlock>{title}</TextBlock>
  </Box>
);

const property = {
  name: "Villa Casa",
  location: "Calla Llonga",
  listPrice: 1000000,
  images: [
    "https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg",
    "https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg",
    "https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg",
    "https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg",
    "https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg",
  ],

  description:
    "Duis qui laboris id aliqua velit. Magna aliqua id do cupidatat eiusmod dolor aute minim esse. Excepteur in sit fugiat occaecat est sit proident sit do et culpa anim.",
  features: [{ icon: "", title: "Swimming Pool" }],
  contactEmail: "mat@villasofibiza.com",
  contactPhone: "+34 1234567",
};

const PDF = ({
  name,
  location,
  listPrice,
  description,
  features,
  images,
  contactEmail,
  contactPhone,
}) => (
  <Document>
    <Page size="A4">
      <Image src={images[0]} />

      <PageContainer height="100%" width="100%">
        <LogoContainer>
          <Image src="/logo.png" />
        </LogoContainer>
        <Box key="header-row" width="100%" height="40%">
          <RightContainer width="180px">
            <Box backgroundColor="#BD7F80" padding="8px">
              <TextBlock
                size="xlarge"
                align="center"
                style={{ marginBottom: "8px" }}
              >
                {name}
              </TextBlock>
              <TextBlock align="center" style={{ marginBottom: "8px" }}>
                {location}
              </TextBlock>
              <TextBlock align="center" size="large">
                €{numeral(listPrice).format("0,0")}
              </TextBlock>
            </Box>
            <IconsContainer>
              <TextBlock color="black">White</TextBlock>
            </IconsContainer>
          </RightContainer>
        </Box>
        <Box key="content-row" direction="row" width="100%" height="50%">
          <Box width="50%" height="100%">
            <DescriptionContainer
              width="100%"
              height="50%"
              backgroundColor="white"
            >
              <TextBlock>{description}</TextBlock>
            </DescriptionContainer>
            <FeaturesContainer width="100%" height="50%" padding="12px">
              <FeaturesInsideContainer>
                <TextBlock style={{ color: "#BD7F80", marginBottom: "12px" }}>
                  Features
                </TextBlock>
              </FeaturesInsideContainer>
              <Box>
                {features.map((props) => (
                  <Feature {...props} />
                ))}
              </Box>
            </FeaturesContainer>
          </Box>
          <Box width="50%" height="100%">
            <Box height="50%" backgroundColor="purple" direction="row" wrap>
              {images.slice(0, 4).map((src) => (
                <GalleryImage src={src} />
              ))}
            </Box>
            <Box height="50%" backgroundColor="blue">
              <SecondaryImage src={images[1]} />
            </Box>
          </Box>
        </Box>
        <Box
          key="contact-row"
          direction="row"
          height="7%"
          backgroundColor="#BD7F80"
          align="center"
          padding="2px 24px"
          justify="space-between"
        >
          <TextBlock color="white" size="large">
            {contactEmail} - {contactPhone}
          </TextBlock>
          <Button
            to="https://villasofibiza.com"
            width="200px"
            style={{ marginTop: "3px", marginBottom: "3px" }}
            backgroundColor="#2A3D50"
            textColor="white"
          >
            Register Interest
          </Button>
        </Box>
        <Box
          key="footer-row"
          height="3%"
          backgroundColor="#2A3D50"
          align="center"
          justify="center"
        >
          <TextBlock color="#CDAB31">
            <Link
              src="https://villasofibiza.com"
              style={{ textDecoration: "none" }}
            >
              villasofibiza.com
            </Link>
          </TextBlock>
        </Box>
      </PageContainer>
    </Page>
  </Document>
);

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <PDF {...property} />
      </PDFViewer>
    </div>
  );
}
