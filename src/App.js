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
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    fontFamily: "LibreBaskerville",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "LibreBaskerville",
  },
  mainContainer: {
    width: "180",
    height: "100",
    marginTop: 40,
    alignSelf: "flex-end",
    flexDirection: "column",
  },
  // titleBox: {
  //   backgroundColor: "#BD7F80",
  // },
  villaName: {
    fontSize: 18,
    textAlign: "center",
    // marginBottom: 5,
    color: "white",
    letterSpacing: 3,
  },
  villaPrice: {
    fontSize: 18,
    textAlign: "center",
    // marginBottom: 5,
    color: "white",
    letterSpacing: 3,
  },
  villaLocation: {
    fontSize: 14,
    textAlign: "center",
    // marginBottom: 0,
    color: "2A3D50",
    letterSpacing: 1,
    fontFamily: "Times-Roman",
  },
  villaNameBox: {
    // backgroundColor: "#BD7F80",
    // height: "100",
    // width: "180",
    // paddingTop: 10,
    // marginBottom: 5,
    // marginTop: 40,
    // alignSelf: "flex-end",
  },
  villaFeaturesBox: {
    backgroundColor: "white",
    opacity: "0.66",
    // height: "150",

    // paddingTop: 10,
    // marginBottom: 5,
  },
  villaButton: {
    backgroundColor: "#273342",
    height: "40",
    width: "180",
    justifyContent: "center",
    // paddingTop: 10,
    // marginBottom: 5,
  },
  villaButtonText: {
    fontSize: 10,
    textAlign: "center",
    color: "white",
    letterSpacing: 4,
  },
  villaStrap: {
    fontSize: 15,
    textAlign: "center",
    // marginTop: 5,
    color: "black",
    letterSpacing: 1,
    fontFamily: "Times-Roman",
  },
  subtitle: {
    fontSize: 18,
    // margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    // margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "46%",
    display: "block",
    height: "46%",
    width: "100%",
  },
});

Font.register({
  family: "LibreBaskerville",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const App = () => (
  <div style={{ height: "100vh", width: "100vw" }}>
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Document>
        <Page size="A4" style={styles.body}>
          <Image
            style={styles.image}
            src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
          />
          <View style={styles.mainContainer}>
            <View style={{ backgroundColor: "#BD7F80" }}>
              <Text style={styles.villaName}>VILLA CASA</Text>
              <Text style={styles.villaLocation}>Calla Longa</Text>
              <Text style={styles.villaPrice}>Price 10m€</Text>
            </View>
            <View style={styles.villaFeaturesBox}>
              <Text>Feature 1</Text>
            </View>
            <View style={styles.villaButton}>
              <Text style={styles.villaButtonText}>VIEW GALLERY</Text>
            </View>
          </View>
          {/* <Text style={styles.villaStrap}>
            Here goes the awesome one line text about the property
          </Text> */}
        </Page>
      </Document>
    </PDFViewer>
  </div>
);

export default App;
