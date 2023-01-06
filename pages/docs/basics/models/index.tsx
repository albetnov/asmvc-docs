import Layout from "../../../../Components/Docs/Layout";
import {
    asmvcUsage, count, deleteField,
    eloquentAlikeUsage,
    envForAsmvcModel,
    envForEloquentModel, first, fullJoin, getUsage, innerJoin, insert, leftJoin, limit,
    modelExample,
    navigations, orderBy, orderByAsc, orderByDesc, orWhere, rightJoin, tableUsage, update, whereNoFormat, whereUsage
} from "../../../../Models/Basics/modelsModel";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import TipsCard from "../../../../Components/Docs/TipsCard";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";

export default function Models() {
    return <Layout title="Models" subTitle="Models About ASMVC" navigations={navigations}
                   navigatorTitle="What is Models contents">
        <Section navigator={navigations[0]}>
            <Text>Model is also a part of MVC (Model-View-Controller). And it&lsquo;s stands for a bridge between your
                logic business (Services/Controllers) to data (databases). With that being said, ASMVC provide you not
                one, but two Models Provider. Making it easy to switch to each other for
                whatever you need.</Text>
        </Section>
        <Section navigator={navigations[1]}>
            <Text>ASMVC also has an Built-In model which also include Query Builder. ASMVC Models is the best fit
                whenever you want to make a simple query to the database. To use ASMVC Model you need to set it up
                first in <Code>.env</Code> file. Simply change <Code>APP_MODELS_DRIVER</Code> to this line below:</Text>
            <CodeMultiLine code={envForAsmvcModel}/>
            <Text>Doing so will change your driver to ASMVC.</Text>
        </Section>
        <Section navigator={navigations[2]}>
            <Text>Meanwhile if you need to use complex Relational. Using Eloquent is recommended. Luckily, ASMVC support
                Eloquent out of the box. Without additional setup. All you need is make sure
                your <Code>APP_MODELS_DRIVER</Code> is configured as below:</Text>
            <CodeMultiLine code={envForEloquentModel}/>
            <TipsCard>
                Eloquent is a default ORM for Laravel. To use Eloquent you just need to make sure that your model
                class extends <Code>Eloquent</Code> class. ASMVC CLI Generation will automatically take care of
                this.
            </TipsCard>
            <Text>In case you need more information about <Code>Eloquent</Code>. Please consult their official
                documentation: <Link href="https://laravel.com/docs/9.x/eloquent">Eloquent Docs</Link>.</Text>
        </Section>
        <Section navigator={navigations[3]}>
            <Text>Unlike Controllers which only bound to OOP Rule, ASMVC Model has several rules you need to comply in
                order for the model to work as expected. The rules are listed below:</Text>
            <UnorderedList>
                <ListItem>Must using <Code>App\Asmvc\Models</Code> Conventions</ListItem>
                <ListItem>
                    The class should extend one of <Code>Model</Code> or <Code>Eloquent</Code> depending on
                    current provider config.
                </ListItem>
                <ListItem>The <Code>protected string $table</Code> must be filled.</ListItem>
                <ListItem>
                    If using Eloquent the <Code>protected array $fillable = []</Code> or {" "}
                    <Code>protected array $guarded=[]</Code> must be filled.
                </ListItem>
            </UnorderedList>
            <Text>A example a model that comply rules above:</Text>
            <CodeMultiLine code={modelExample}/>
            <Text>If all the rules above applied. Your model should work correctly. But if you a lazy type of person,
                ASMVC provide you auto model generation by simply running:</Text>
            <CodeOneLine text="php asmvc create:model ModelName"/>
            <Text>And your model will created while also respecting your model driver choice. Your model will be
                generated in:</Text>
            <List>
                <OpenFolder>
                    App/
                    <List ml={2}>
                        <OpenFolder>
                            Models/
                            <List ml={2}>
                                <File>ModelName.php</File>
                            </List>
                        </OpenFolder>
                    </List>
                </OpenFolder>
            </List>
        </Section>
        <Section navigator={navigations[4]}>
            <Text>Using a model is dependent from which model provider you choose.</Text>
            <UnorderedList>
                <ListItem>
                    <Text>If Eloquent, you can take advantage of their magic method to perform query building you
                        need.</Text>
                    <CodeMultiLine code={eloquentAlikeUsage}/>
                </ListItem>
                <ListItem>
                    <Text>For ASMVC Model is a little different though, The magic method is exist but still
                        experimental. You may can use Eloquent Usage like above but no guarantee if it will
                        cause any issue further. The recommended way to use ASMVC model however is this:</Text>
                    <CodeMultiLine code={asmvcUsage}/>
                </ListItem>
            </UnorderedList>
            <TipsCard>
                Replace the <Code>query()</Code> with available method of Query Building of respective drivers.
            </TipsCard>
        </Section>
        <Section navigator={navigations[5]}>
            <TipsCard>
                For list of available method in Eloquent. Please consult their {" "}
                <Link href="https://laravel.com/docs/9.x/eloquent">Official Documentation</Link>.
            </TipsCard>
            <Text>Here&lsquo;s is the list of available method to use for ASMVC Model:</Text>
            <UnorderedList>
                <ListItem>
                    <Code>table</Code>
                    <Text>Define which table to query. Usage: </Text>
                    <CodeMultiLine code={tableUsage}/>
                </ListItem>
                <ListItem>
                    <Code>get</Code>
                    <Text>Get all table item</Text>
                    <CodeMultiLine code={getUsage}/>
                </ListItem>
                <ListItem>
                    <Code>where</Code>
                    <Text>Query where SQL</Text>
                    <CodeMultiLine code={whereUsage}/>
                </ListItem>
                <ListItem>
                    <Code>whereNoFormat</Code>
                    <Text>Allows you to make the next where statement become
                        unformatted. <Code>&apos;1&apos;</Code> to <Code>1</Code>.</Text>
                    <CodeMultiLine code={whereNoFormat}/>
                </ListItem>
                <ListItem>
                    <Code>orWhere</Code>
                    <Text>Query orWhere SQL</Text>
                    <CodeMultiLine code={orWhere}/>
                </ListItem>
                <ListItem>
                    <Code>orderBy</Code>
                    <Text>Query orderBy an item</Text>
                    <CodeMultiLine code={orderBy}/>
                </ListItem>
                <ListItem>
                    <Code>orderByAsc</Code>
                    <Text>Just like <Code>orderBy</Code> but ordering set to <Code>ASC</Code>.</Text>
                    <CodeMultiLine code={orderByAsc}/>
                </ListItem>
                <ListItem>
                    <Code>orderByAsc</Code>
                    <Text>Just like <Code>orderBy</Code> but ordering set to <Code>DESC</Code>.</Text>
                    <CodeMultiLine code={orderByDesc}/>
                </ListItem>
                <ListItem>
                    <Code>limit</Code>
                    <Text>Limit an query item result from given number</Text>
                    <CodeMultiLine code={limit}/>
                </ListItem>
                <ListItem>
                    <Code>innerJoin</Code>
                    <Text>Perform table joining with <Code>INNER</Code> as it&lsquo;s scope.</Text>
                    <CodeMultiLine code={innerJoin}/>
                </ListItem>
                <ListItem>
                    <Code>leftJoin</Code>
                    <Text>Perform table joining with <Code>LEFT</Code> as it&lsquo;s scope.</Text>
                    <CodeMultiLine code={leftJoin}/>
                </ListItem>
                <ListItem>
                    <Code>rightJoin</Code>
                    <Text>Perform table joining with <Code>RIGHT</Code> as it&lsquo;s scope.</Text>
                    <CodeMultiLine code={rightJoin}/>
                </ListItem>
                <ListItem>
                    <Code>fullJoin</Code>
                    <Text>Perform table joining with <Code>FULL</Code> as it&lsquo;s scope.</Text>
                    <CodeMultiLine code={fullJoin}/>
                </ListItem>
                <ListItem>
                    <Code>first</Code>
                    <Text>Get a first item from query result</Text>
                    <CodeMultiLine code={first}/>
                </ListItem>
                <ListItem>
                    <Code>count</Code>
                    <Text>Return data counts</Text>
                    <CodeMultiLine code={count}/>
                </ListItem>
                <ListItem>
                    <Code>insert</Code>
                    <Text>Insert a data to table</Text>
                    <CodeMultiLine code={insert}/>
                </ListItem>
                <ListItem>
                    <Code>update</Code>
                    <Text>Update a data (use with where to update single data)</Text>
                    <CodeMultiLine code={update}/>
                </ListItem>
                <ListItem>
                    <Code>delete</Code>
                    <Text>Delete a data (use with where to delete single data)</Text>
                    <CodeMultiLine code={deleteField}/>
                </ListItem>
            </UnorderedList>
        </Section>
    </Layout>
}