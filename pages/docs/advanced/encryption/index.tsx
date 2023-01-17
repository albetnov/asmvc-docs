import Layout from "../../../../Components/Docs/Layout";
import {navigations} from "../../../../Models/Advanced/encryption";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import TipsCard from "../../../../Components/Docs/TipsCard";

export default function Encryption() {
    return (
        <Layout title="Encryption" subTitle="Full Featured Encryption from ASMVC" navigations={navigations}
                navigatorTitle="Encryption Contents">
            <Section navigator={navigations[0]}>
                <Text>
                    Encryption plays a pretty important role in securing data. By default, PHP has provide some basic
                    encryption you can use. Like <Code>password_hash</Code> for example, that support plenty of
                    algorithms. <Code>md5</Code>, <Code>sha1</Code>, and much more! However, often you may need more
                    than just an encryption. That&lsquo;s why ASMVC choose to ship with more full featured encryption.
                    An integration with JWT thanks to <Link
                    href="https://packagist.org/packages/firebase/php-jwt">firebase/php-jwt</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>
                    With that being said, ASMVC also provide a JWT Payload Builder called <Code>CryptJWT</Code> which
                    easier process of generating an payload for JWT. These payload generator including: issuer,
                    expiration, and many more. Below are available method you can use:
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Code>setHashType(HashType $hashType)</Code>
                        <Text>Set the hash type using <Code>HashType</Code> enum interface</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setIssuer(string $issuer)</Code>
                        <Text>Set the issuer name</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setAudience(string $audience)</Code>
                        <Text>Set the target audience.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setIssuedAt(UnixTimestamp $timestamp)</Code>
                        <Text>Set the issue at timestamp, must be filled
                            using <Code>UnixTimestamp</Code> interface.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setNotBefore(UnixTimestamp $timestamp)</Code>
                        <Text>Set payload validity not before given timestamp.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setExpiresAt(UnixTimestamp $expiresAt)</Code>
                        <Text>Set the expiry of payload validity from given timestamp.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>encrypt(array $data)</Code>
                        <Text>Encrypt an data. Must be associative array!</Text>
                    </ListItem>
                    <ListItem>
                        <Code>decrypt(string $tokenData)</Code>
                        <Text>Decrypt given token data from a JWT using app secret.</Text>
                    </ListItem>
                </UnorderedList>
                <TipsCard>
                    The <Code>APP_KEY</Code> is required field in <Code>.env</Code> file when using CryptJWT. Else an
                    exception will be thrown.
                </TipsCard>
            </Section>
        </Layout>
    )
}