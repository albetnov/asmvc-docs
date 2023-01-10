import Layout from "../../../../Components/Docs/Layout";
import {
  currentUrl,
  fullGetInput,
  fullGetQuery,
  navigations,
  psr7,
  wantsJson,
} from "../../../../Models/DiveIn/request";
import Section from "../../../../Components/Docs/Section";
import { Code, Link, Text } from "@chakra-ui/react";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";

export default function Request() {
  return (
    <Layout
      title="The Request Interface"
      subTitle="ASMVC Request"
      navigations={navigations}
      navigatorTitle="ASMVC Request contents"
    >
      <Section navigator={navigations[0]}>
        <Text>
          Request is a utility class that provide user HTTP request in a fluent method. With request
          you can perform any things related to the user. Not limited by query, but also method
          until headers which can be useful if you need those information. The new ASMVC Requests
          wrapped around PSR-7 compatible,
          <Link href="https://packagist.org/packages/laminas/laminas-diactoros">
            Laminas/Diactoros
          </Link>
          .
        </Text>
      </Section>
      <Section navigator={navigations[1]}>
        <Text>
          The Input Method is still another convenient wrapper around <Code>$_POST</Code> which
          already use Diactoros this time. The <Code>getInput()</Code> method takes single parameter
          as identifier and return either string, boolean, or array depends on identifier. The
          complete example as follow:
        </Text>
        <CodeMultiLine code={fullGetInput} />
        <Text>
          If the <Code>$identifier</Code> filled with <Code>&apos;*&apos;</Code>, then all parsed{" "}
          <Code>$_POST</Code> will be returned. And, if the identifier not exist <Code>false</Code>{" "}
          will be returned.
        </Text>
      </Section>
      <Section navigator={navigations[2]}>
        <Text>
          The Query Method is also the same like Input Method above. But instead of{" "}
          <Code>$_POST</Code>, it&lsquo;s <Code>$_GET</Code>. The <Code>getQuery()</Code> method
          take single parameter as identifier and return either string or boolean. Code
          documentation:
        </Text>
        <CodeMultiLine code={fullGetQuery} />
        <Text>
          Unfortunely, unlike <Code>getInput()</Code> the <Code>$identifier</Code> does&lsquo;t
          support <Code>&apos;*&apos;</Code>.
        </Text>
      </Section>
      <Section navigator={navigations[3]}>
        <Text>
          The <Code>currentUrl()</Code> method used to get current user url. The function take no
          arguments and return string.
        </Text>
        <CodeMultiLine code={currentUrl.instance} />
        <Text>It&lsquo;s also can be accessed directly via helpers:</Text>
        <CodeMultiLine code={currentUrl.helpers} />
      </Section>
      <Section navigator={navigations[4]}>
        <Text>
          Used to determine whenever user request asks for JSON response or not. This function take
          no argument and will return boolean.
        </Text>
        <CodeMultiLine code={wantsJson} />
      </Section>
      <Section navigator={navigations[5]}>
        <Text>
          Since ASMVC Requests is just a wrapper around Laminas/Diactoros. You can access the
          library directly from ASMVC Requests using <Code>$request-&gt;getAll()</Code> method. This
          function take no argument and will return <Code>ServerRequest</Code> instance from
          Laminas/Diactoros library.
        </Text>
        <CodeMultiLine code={psr7} />
      </Section>
    </Layout>
  );
}
