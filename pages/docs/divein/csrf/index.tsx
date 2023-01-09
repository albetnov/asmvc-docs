import Layout from "../../../../Components/Docs/Layout";
import {latteExample, nativeExample, navigations} from "../../../../Models/DiveIn/csrf";
import Section from "../../../../Components/Docs/Section";
import {Text, Link} from "@chakra-ui/react";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";

export default function CSRF() {
    return (
        <Layout subTitle="Cross Site Request Forgery" navigations={navigations} navigatorTitle="All about CSRF">
            <Section navigator={navigations[0]}>
                <Text>
                    CSRF or known as Cross Site Request Forgery is one of common attack that likes to occur in the
                    internet. This attack is considered as a dangerous one if not handled carefully. We highly suggest
                    you
                    to read following article to get more insight about what CSRF is about:{" "}
                    <Link href="https://owasp.org/www-community/attacks/csrf">OWASP CSRF Article</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>
                    Luckily, ASMVC integrate well with <Link
                    href="https://packagist.org/packages/symfony/security-csrf">Symfony/Security-CSRF</Link>. Which make
                    it painless to provide security over CSRF Attacks. This package also integrate well with your form
                    submission and the http methods it self can help you validate it. To provide a security over CSRF
                    all you need is simply put:
                </Text>
                <CodeOneLine text="csrf()"/>
                <Text>Assume you used native view, then:</Text>
                <CodeOneLine text="csrf_field()"/>
                <Text>And that&lsquo;s it. Anything else will be taken care by ASMVC.</Text>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>
                    Here is an usage example of Latte with CSRF Protection in form:
                </Text>
                <CodeMultiLine code={latteExample}/>
                <Text>If you used ASMVC Native:</Text>
                <CodeMultiLine code={nativeExample}/>
            </Section>
        </Layout>
    )
}