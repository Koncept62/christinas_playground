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

import styled from "@react-pdf/styled-components";

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
  topContainer: {
    width: "100%",
    height: "40%",
    alignSelf: "flex-end",
    flexDirection: "column",
    backgroundColor: "#dedede",
  },
  mainContainer: {
    width: "180",
    height: "100",
    marginTop: 40,
    alignSelf: "flex-end",
    flexDirection: "column",
  },
  firstRowContainer: {
    width: "100%",
    height: "24%",
    minHeight: "23%",
    marginTop: "4",
    flexDirection: "row",
  },
  secondRowContainer: {
    width: "100%",
    height: "24%",
    minHeight: "23%",
    marginTop: "4",
    flexDirection: "row",
  },
  contactBoxContainer: {
    width: "100%",
    height: "7%",
    marginTop: "2",
    flexDirection: "row",
    backgroundColor: "#BD7F80",
  },

  webContainer: {
    width: "100%",
    height: "4%",
    minHeight: "4%",
    marginTop: "1",
    flexDirection: "column",
    backgroundColor: "#273342",
  },
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
  villaFeaturesBox: {
    backgroundColor: "white",
    marginTop: "4",
    opacity: "0.66",
    // height: "150",
    flexDirection: "column",
    padding: 10,
    // marginBottom: 5,
  },
  villaButton: {
    backgroundColor: "#273342",
    height: "40",
    width: "180",
    justifyContent: "center",
    marginTop: "4",
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
  firstCollumn: {
    width: "49%",
    minWidth: "49%",
    height: "100%",
    marginRight: "4",
    marginLeft: "4",
    padding: 20,
    flexDirection: "row",
    borderBottomColor: "#BD7F80",
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
  },

  firstCollumnBottom: {
    width: "49%",
    minWidth: "46%",
    height: "100%",
    marginRight: "4",
    marginLeft: "4",
    padding: 20,
    flexDirection: "column",
    borderBottomWidth: 0,
  },
  secondCollumn: {
    width: "50%",
    minWidth: "49%",
    height: "100%",
    marginRight: "0",
    marginLeft: "4",
    flexDirection: "row",
  },

  contactText: {
    marginLeft: "30",
    marginTop: "15",
    marginRight: "30",
    color: "white",
  },

  registerButton: {
    backgroundColor: "#273342",
    height: "40",
    width: "180",
    justifyContent: "center",
    marginTop: "10",
    marginLeft: "40",
    // paddingTop: 10,
    // marginBottom: 5,
  },
  webText: {
    marginLeft: "30",
    marginTop: "5",
    marginRight: "30",
    fontSize: "10",
    color: "#CDAB31",
    textAlign: "center",
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
  // image: {
  //  position: "absolute",
  // minWidth: "100%",
  // minHeight: "46%",
  // display: "block",
  // height: "46%",
  // width: "100%",
  // },
});

// get the ttf url at https://nikoskip.me/gfonts.php
Font.register({
  family: "LibreBaskerville",
  src:
    "http://fonts.gstatic.com/s/librebaskerville/v9/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxYaC82U.ttf",
});

const App = () => (
  <div style={{ height: "100vh", width: "100vw" }}>
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Document>
        <Page size="A4" style={styles.body}>
          <View style={styles.topContainer}>
            <View style={styles.mainContainer}>
              <View style={{ backgroundColor: "#BD7F80" }}>
                <Text style={styles.villaName}>VILLA CASA</Text>
                <Text style={styles.villaLocation}>Calla Longa</Text>
                <Text style={styles.villaPrice}>Price 10m€</Text>
              </View>
              <View key="features" style={styles.villaFeaturesBox}>
                <View
                  style={{ height: "49%", flexDirection: "row", padding: 0 }}
                >
                  <View
                    style={{
                      width: "30%",
                      margin: "5",
                      alignContent: "space-around",
                    }}
                  >
                    <Image
                      style={{ maxWidth: "40%" }}
                      src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                    />
                    <Text
                      style={{
                        fontSize: "11",
                        textAlign: "center",
                        lineHeight: 2,
                        marginTop: "3",
                      }}
                    >
                      6
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "30%",
                      margin: "5",
                      alignContent: "space-around",
                    }}
                  >
                    <Image
                      style={{ maxWidth: "40%" }}
                      src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                    />
                    <Text
                      style={{
                        fontSize: "11",
                        textAlign: "center",
                        lineHeight: 2,
                        marginTop: "3",
                      }}
                    >
                      6
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "30%",
                      margin: "5",
                      alignContent: "space-around",
                    }}
                  >
                    <Image
                      style={{ maxWidth: "40%" }}
                      src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                    />
                    <Text
                      style={{
                        fontSize: "11",
                        textAlign: "center",
                        lineHeight: 2,
                        marginTop: "3",
                      }}
                    >
                      6
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: "49%",
                    flexDirection: "row",
                    alignContent: "space-around",
                  }}
                >
                  <View
                    style={{
                      width: "49%",
                      margin: "5",
                      alignContent: "space-around",
                    }}
                  >
                    <Image
                      style={{ maxWidth: "40%" }}
                      src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                    />
                    <Text
                      style={{
                        fontSize: "11",
                        textAlign: "center",
                        lineHeight: 2,
                        marginTop: "3",
                      }}
                    >
                      6
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "49%",
                      margin: "5",
                      alignContent: "center",
                    }}
                  >
                    <Image
                      style={{ maxWidth: "40%" }}
                      src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                    />
                    <Text
                      style={{
                        fontSize: "11",
                        textAlign: "center",
                        lineHeight: 2,
                        marginTop: "3",
                      }}
                    >
                      6
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.villaButton}>
                <Text style={styles.villaButtonText}>VIEW GALLERY</Text>
              </View>
            </View>
          </View>
          <View style={styles.firstRowContainer}>
            <View style={styles.firstCollumn}>
              <Text style={{ fontSize: "11", lineHeight: 1.7 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                read more...
              </Text>
            </View>
            <View style={styles.secondCollumn}>
              <View style={{ height: "49%" }}>
                <View style={{ width: "49%", marginRight: 1 }}>
                  <Image
                    style={styles.image}
                    src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                  />
                </View>
                <View style={{ width: "49%" }}>
                  <Image
                    style={styles.image}
                    src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                  />
                </View>
              </View>
              <View style={{ height: "49%" }}>
                <View style={{ maxWidth: "49%" }}>
                  <Image
                    style={styles.image}
                    src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                  />
                </View>
                <View style={{ width: "49%" }}>
                  <Image
                    style={styles.image}
                    src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondRowContainer}>
            <View style={styles.firstCollumnBottom}>
              <Text
                style={{ fontSize: "14", lineHeight: 1.7, color: "#BD7F80" }}
              >
                Features
              </Text>
              <View style={{ flexDirection: "row", marginTop: "10" }}>
                <Image
                  style={{
                    maxWidth: "10%",
                    marginRight: "10",
                    marginBottom: "8",
                  }}
                  src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                />
                <Text style={{ fontSize: "12", lineHeight: 2, marginTop: "5" }}>
                  SWIMMING POOL
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    maxWidth: "10%",
                    marginRight: "10",
                    marginBottom: "´8",
                  }}
                  src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                />
                <Text style={{ fontSize: "12", lineHeight: 2, marginTop: "5" }}>
                  SWIMMING POOL
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    maxWidth: "10%",
                    marginRight: "10",
                    marginBottom: "8",
                  }}
                  src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                />
                <Text style={{ fontSize: "12", lineHeight: 2, marginTop: "5" }}>
                  SWIMMING POOL
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    maxWidth: "10%",
                    marginRight: "10",
                    marginBottom: "´8",
                  }}
                  src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                />
                <Text style={{ fontSize: "12", lineHeight: 2, marginTop: "5" }}>
                  SWIMMING POOL
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    maxWidth: "10%",
                    marginRight: "10",
                    marginBottom: "8",
                  }}
                  src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
                />
                <Text style={{ fontSize: "12", lineHeight: 2, marginTop: "5" }}>
                  SWIMMING POOL
                </Text>
              </View>
            </View>
            <View style={styles.secondCollumn}>
              <Image
                style={styles.image}
                src="https://i1.wp.com/www.inveniohomes.com/wp-content/uploads/2021/01/the-grey_190927_061_5000px-scaled.jpg"
              />
            </View>
          </View>
          <View style={styles.contactBoxContainer}>
            <Text style={styles.contactText}>
              mathew@villasofibiza.com - +34 680 66 14 72
            </Text>
            <View style={styles.registerButton}>
              <Text style={styles.villaButtonText}>REGISTER INTEREST</Text>
            </View>
          </View>
          <View style={styles.webContainer}>
            <Text style={styles.webText}>www.villasofibiza.com</Text>
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
