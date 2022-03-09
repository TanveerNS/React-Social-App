import React from "react";
import Head from "next/head";
import Countdown, { zeroPad } from "react-countdown";

import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import SocialIcons from "../../components/other/SocialIcons";

export default function comingSoon() {
  return (
    <>
      <Head>
        <title>Coming soon</title>
      </Head>
      <div className="coming-soon">
        <div className="coming-soon-wrapper">
          <Container>
            <main>
              <SectionTitle title="Coming Soon" hideDecoration />
              <h3>OUR WEBSITE IS UNDER CORPORATE.</h3>
              <Countdown
                date={Date.now() + 100000000}
                renderer={({ days, hours, minutes, seconds }) => {
                  return (
                    <div className="coming-soon-countdown">
                      <div className="coming-soon-countdown-item">
                        <h6>{zeroPad(days)}</h6> <span>/days</span>
                      </div>
                      <div className="coming-soon-countdown-item">
                        <h6>{zeroPad(hours)}</h6> <span>/hr</span>
                      </div>
                      <div className="coming-soon-countdown-item">
                        <h6>{zeroPad(minutes)} </h6>
                        <span>/min</span>
                      </div>
                      <div className="coming-soon-countdown-item">
                        <h6>{zeroPad(seconds)}</h6> <span>/sec</span>
                      </div>
                    </div>
                  );
                }}
              />
              <p>Follow Us For Updates</p>
              <SocialIcons type="primary" shape="round" />
            </main>
          </Container>
        </div>
      </div>
    </>
  );
}
