import {
  PureReactParagraph,
  EmotionParagraph,
  StyledParagraph,
  TwinEmotionParagraph,
  InlineTwinParagraph,
  Accordion,
  DataGrid,
  useToast,
  Button,
} from "my-components";

interface Row {
  id: number;
  name: string;
}

function rowKeyGetter(row: Row) {
  return row.id;
}

function App() {
  const columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
  ];

  const rows = [
    { id: 0, title: "Example" },
    { id: 1, title: "Demo" },
  ];

  const { toast } = useToast();

  return (
    <>
      <div>
        <PureReactParagraph>{"Hello pure react paragraph"}</PureReactParagraph>
        <EmotionParagraph>{"Emotion based styled component"}</EmotionParagraph>
        <StyledParagraph>{"Style-fixed paragraph"}</StyledParagraph>
        <Button.Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button.Button>
        <TwinEmotionParagraph>
          {"TailwindCSS based paragraph"}
        </TwinEmotionParagraph>
        <InlineTwinParagraph>
          {"Inline Twin based paragraph"}
        </InlineTwinParagraph>
        <Accordion.AccordionRoot type="single" collapsible>
          <Accordion.AccordionItem value="item-1">
            <Accordion.AccordionTrigger>
              Is it accessible?
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.AccordionContent>
          </Accordion.AccordionItem>
          <Accordion.AccordionItem value="item-2">
            <Accordion.AccordionTrigger>
              Is it styled?
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              Yes. It comes with default styles that matches the other
              components' aesthetic.
            </Accordion.AccordionContent>
          </Accordion.AccordionItem>
          <Accordion.AccordionItem value="item-3">
            <Accordion.AccordionTrigger>
              Is it animated?
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </Accordion.AccordionContent>
          </Accordion.AccordionItem>
        </Accordion.AccordionRoot>
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} />;
      </div>
    </>
  );
}

export default App;
