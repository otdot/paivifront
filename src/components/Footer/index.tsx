import { Link, Typography, Container } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="sm">
        <div className={styles.footercontainer}>
          <a
            className={styles.thankslink}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/otdot"
          >
            <GitHubIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.thankslink}
            href="https://fi.linkedin.com/in/otto-mursula-48030b192"
          >
            <LinkedInIcon />
          </a>
          <div className={styles.thankscontainer}>
            <Typography variant="caption" display="block">
              Special Thanks:
            </Typography>
            <div className={styles.thanks}>
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.thankslink}
                href="https://www.mui.com"
              >
                MUI
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.thankslink}
                href="https://www.mui.com"
              >
                Mongo Atlas
              </a>
            </div>
          </div>
        </div>
        <div className={styles.disclaimer}>
          <Typography variant="caption" display="block">
            Please don't save sensitive data to the website. Data in the site is
            fake data
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
