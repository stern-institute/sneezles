<template>
  <v-dialog fullscreen v-model="privacy" style="z-index: 1000">
    <v-card id="privacy_card">
      <v-toolbar dark color="primary" width="100%" style="position: fixed">
        <v-btn icon dark @click="$emit('update:privacy', false)">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Sneezles Privacy Policy</v-toolbar-title>
      </v-toolbar>

      <v-container>
        <p class="mt-16"><em>Last updated: 31 March 2021</em></p>

        <p>
          The privacy of your data is a big deal to us. We store as little of
          your data as possible, and only use it to contact you if you've signed
          up to our mailing list.
        </p>

        <p>
          This Privacy Policy is intended to be short, readable and helpful.
          It's inspired by that of
          <a href="https://tythe.org">Tythe</a>, a wonderful non-profit on a
          mission to streamline the fight to save our planet.
        </p>

        <h1>Cookies</h1>

        <p>
          Cookies are small snippets of information associated with a particular
          website that can be stored in your web browser. They have many uses,
          including keeping you logged in as you navigate around a website.
        </p>

        <p>
          We've written Sneezles so that it doesn't require any cookies, so we
          don't use them.
        </p>

        <h1>Identity & access</h1>
        <p>
          When you sign up for the Sneezles mailing list, we ask for your email
          address. This allows us to send you important updates.
        </p>

        <p>
          We'll never sell your personal information to third parties without
          your permission, and we won't use your name in marketing statements
          without your permission either.
        </p>

        <p>
          When you write to Sneezles with a question or to ask for help, we'll
          keep that correspondence, and the email address, for future reference.
          When you browse our web pages, we'll track that for statistical
          purposes (like conversion rates and to test new designs). We also
          store any information you volunteer, like surveys, for as long as it
          makes sense.
        </p>

        <p>The only times we'll ever share your info:</p>

        <ul>
          <li>
            To provide products or services you've requested, with your
            permission.
          </li>
          <li>
            To investigate, prevent, or take action regarding illegal
            activities, suspected fraud, situations involving potential threats
            to the physical safety of any person, or as otherwise required by
            law.
          </li>
          <li>
            If Sneezles transfers to or merges with a charity we'll notify you
            before any information about you is transferred and becomes subject
            to a different privacy policy.
          </li>
        </ul>

        <h1>Your rights with respect to your information</h1>

        <p>
          You may have heard about the General Data Protection Regulation (GDPR)
          in Europe. GDPR gives people under its protection certain rights with
          respect to their personal information collected by us on the site.
          Accordingly, Sneezles recognises and will comply with GDPR and those
          rights, except as limited by applicable law. The rights under GDPR
          include:
        </p>

        <ul>
          <li>
            <strong>Right of Access.</strong> This includes your right to access
            the personal information we gather about you, and your right to
            obtain information about the sharing, storage, security and
            processing of that information.
          </li>
          <li>
            <strong>Right to Correction.</strong> This is your right to request
            correction of your personal information.
          </li>
          <li>
            <strong>Right to Erasure.</strong> This is your right to request,
            subject to certain limitations under applicable law, that your
            personal information be erased from our possession (also known as
            the "Right to be forgotten").
          </li>
          <li>
            <strong>Right to Complain.</strong> You have the right to make a
            complaint regarding our handling of your personal information with
            the appropriate supervisory authority.
          </li>
          <li>
            <strong>Right to Restrict Processing.</strong> This is your right to
            request restriction of how and why your personal information is used
            or processed.
          </li>
          <li>
            <strong>Right to Object.</strong> This is your right, in certain
            situations, to object to how or why your personal information is
            processed.
          </li>
          <li>
            <strong>Right to Portability.</strong> This is your right to receive
            the personal information we have about you and the right to transmit
            it to another party.
          </li>
          <li>
            <strong
              >Right to not be subject to Automated Decision-Making.</strong
            >
            This is your right to object and prevent any decision that could
            have a legal, or similarly significant, effect on you from being
            made solely based on automated processes. This right is limited,
            however, if the decision is necessary for performance of any
            contract between you and us, is allowed by applicable European law,
            or is based on your explicit consent.
          </li>
        </ul>

        <p>
          If you have questions about exercising these rights or need
          assistance, please contact us at
          <a href="mailto:support@sneezl.es">support@sneezl.es</a>.
        </p>

        <h1>Processors we use</h1>

        <p>
          As part of the services we provide, and only to the extent necessary,
          we may use certain third party processors to process some or all of
          your personal information.
        </p>

        <p>
          Sneezles uses third party subprocessors, such as cloud computing
          providers, to provide our services. We enter into GDPR-compliant data
          processing agreements with each subprocessor, extending GDPR
          safeguards everywhere personal data is processed. Our subprocessors:
        </p>

        <ul>
          <li>
            <a href="https://console.cloud.google.com">Google Cloud Platform</a>
            - cloud services provider.
          </li>
          <li>
            <a href="https://www.cloudflare.com/en-gb/">CloudFlare</a>
            - content delivery network & DDOS mitigation
          </li>
        </ul>

        <p>
          We only ever use third party processors who are GDPR compliant and
          have an awareness of data protection, security and confidentiality.
        </p>

        <h1>Law enforcement</h1>

        <p>
          Sneezles won't hand your data over to law enforcement unless a court
          order says we have to. And unless we're legally prevented from it,
          we'll always inform you when such requests are made.
        </p>

        <h1>Security & encryption</h1>

        <p>
          All data is encrypted via SSL/TLS when transmitted from our servers to
          your browser.
        </p>

        <h1>Deleted data</h1>

        <p>
          You can delete your account by emailing
          <a href="mailto:support@sneezl.es">support@sneezl.es</a>, and we'll
          ensure that no personal information is stored on our servers past 30
          days, except where required by law.
        </p>

        <h1>Location of site and data</h1>

        <p>
          This website is operated in Europe and our data is held and processed
          in Europe.
        </p>

        <h1>Changes & questions</h1>

        <p>
          Sneezles may update this policy once in a blue moon - we'll notify you
          about significant changes by email or by placing a prominent notice on
          our site. You can access your personal information at any time by
          emailing <a href="mailto:support@sneezl.es">support@sneezl.es</a>.
        </p>

        <p>
          Questions about this privacy policy? Please
          <a href="mailto:support@sneezl.es">get in touch</a> and we'll be happy
          to answer them!
        </p>

        <div class="text-center">
          <v-btn color="primary" @click="$emit('update:privacy', false)">
            Cool!
          </v-btn>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
export default {
  name: "Privacy",
  props: {
    privacy: {},
  },
};
</script>

<style scoped>
#privacy_card {
  text-align: left;
}
ul {
  margin-bottom: 20px;
}
li {
  margin-bottom: 10px;
}
</style>
