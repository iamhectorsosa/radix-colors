import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/Accordion";

export default function Preview() {
  return (
    <div className="w-full p-6">
      <Accordion
        defaultValue="item-1"
        type="single"
        collapsible
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus aspernatur debitis nemo sed temporibus, laboriosam,
            dolores dolorum dicta id autem delectus sit minus! Quos cumque,
            soluta sunt nemo incidunt mollitia.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
