import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Layout from "@/components/Layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}


const sendAnalytics = async ({ name, value }) => {
  const NextBugfender = (await import("../../utils/NextBugfender")).default;
  NextBugfender.init();
  if (name === "FCP") {
    if (value >= 0 && value <= 2000) {
      NextBugfender.log(
        `${name} value ${value} is in range and the speed is fast.`
      );
    } else if (value > 2000 && value <= 4000) {
      NextBugfender.warn(
        `${name} value ${value} is in a bit out of range and the speed is moderate.`
      );
      NextBugfender.sendUserFeedback(
        "FCP Warning",
        "The speed of loading this page may be moderate."
      );
    }
    if (value > 4000) {
      NextBugfender.error(
        `${name} value ${value} is completly out of range and the speed is slow.`
      );
      NextBugfender.sendIssue(
        "Issue with FCP",
        "The speed of loading this page may be slow. Creating an issue."
      );
    }
  } else if (name === "LCP") {
    if (value >= 0 && value <= 2500) {
      NextBugfender.log(
        `${name} value ${value} is in range and the speed is fast.`
      );
    } else if (value > 2500 && value <= 4000) {
      NextBugfender.warn(
        `${name} value ${value} is in a bit out of range and the speed is moderate.`
      );
      NextBugfender.sendUserFeedback(
        "LCP Warning",
        "The speed of loading this page may be moderate."
      );
    }
    if (value > 4000) {
      NextBugfender.error(
        `${name} value ${value} is completly out of range and the speed is slow.`
      );
      NextBugfender.sendIssue(
        "Issue with LCP",
        "The speed of loading this page may be slow. Creating an issue."
      );
    }
  } else if (name === "CLS") {
    if (value >= 0 && value <= 0.1) {
      NextBugfender.log(
        `${name} value ${value} is in range and the speed is fast.`
      );
    } else if (value > 0.1 && value <= 0.25) {
      NextBugfender.warn(
        `${name} value ${value} is in a bit out of range and the speed is moderate.`
      );
      NextBugfender.sendUserFeedback(
        "CLS Warning",
        "The speed of loading this page may be moderate."
      );
    }
    if (value > 0.25) {
      NextBugfender.error(
        `${name} value ${value} is completly out of range and the speed is slow.`
      );
      NextBugfender.sendIssue(
        "Issue with CLS",
        "The speed of loading this page may be slow. Creating an issue."
      );
    }
  } else if (name === "FID") {
    if (value >= 0 && value <= 100) {
      NextBugfender.log(
        `${name} value ${value} is in range and the speed is fast.`
      );
    } else if (value > 100 && value <= 300) {
      NextBugfender.warn(
        `${name} value ${value} is in a bit out of range and the speed is moderate.`
      );
      NextBugfender.sendUserFeedback(
        "FID Warning",
        "The speed of loading this page may be moderate."
      );
    }
    if (value > 300) {
      NextBugfender.error(
        `${name} value ${value} is completly out of range and the speed is slow.`
      );
      NextBugfender.sendIssue(
        "Issue with FID",
        "The speed of loading this page may be slow. Creating an issue."
      );
    }
  } else {
    NextBugfender.log(`${name} value is: ${value}`);
  }
};

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      sendAnalytics(metric);
      break;
    case "LCP":
      sendAnalytics(metric);
      break;
    case "CLS":
      sendAnalytics(metric);
      break;
    case "FID":
      sendAnalytics(metric);
      break;
    case "TTFB":
      sendAnalytics(metric);
      break;
    case "Next.js-hydration":
      sendAnalytics(metric);
      break;
    case "Next.js-route-change-to-render":
      sendAnalytics(metric);
      break;
    case "Next.js-render":
      sendAnalytics(metric);
      break;
    default:
      break;
  }
}