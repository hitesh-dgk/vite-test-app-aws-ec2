import { OutlineButton } from '../Buttons/OutlineButton';
import { ArrowUpRight } from 'react-bootstrap-icons';

export function Contact() {
  return (
    <>
      <div className="font-anybody text-xl font-bold sm:text-3xl">
        Still have a question?
      </div>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-8 sm:mt-12">
        <OutlineButton className="w-full xs:w-auto">
          <span>Contact</span>
          <ArrowUpRight size="18" className="ml-1" />
        </OutlineButton>
      </div>
    </>
  );
}