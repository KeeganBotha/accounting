"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import { useFormContext } from "react-hook-form";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Icon } from "../icon";

const isDevmode = process.env.NODE_ENV === "development";

export function RHFDiagnostic({
  hideDiagnostics,
  renderInline,
}: {
  hideDiagnostics?: boolean;
  renderInline?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const [modalRef, setModalRef] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const form = useFormContext();
  const nodeRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const modal = document.getElementById("dialog-overlay");
    if (modal) setModalRef(modal);
  }, []);

  if (!mounted) return null;

  if (!isDevmode) return null;
  if (hideDiagnostics) return null;

  const diagnosticComponent = (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Form Data</AccordionTrigger>
        <AccordionContent>
          <div className="w-[25rem] max-w-[25rem] overflow-auto">
            <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Errors</AccordionTrigger>
        <AccordionContent>
          <div className="w-[25rem] max-w-[25rem] overflow-auto">
            <pre className="text-no">
              {JSON.stringify(form.formState.errors, null, 2)}
            </pre>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );

  if (renderInline) return diagnosticComponent;

  const iconComponent = (
    <div
      className="fixed bottom-2 right-16 flex flex-col items-center justify-center gap-1 text-center"
      onClick={() => setIsOpen(true)}
    >
      <div className="flex aspect-square h-[40px] max-w-[40px] cursor-pointer items-center justify-center rounded-full bg-accentGray shadow-lg hover:bg-gray-light/30">
        <Icon iconName="FileText" />
      </div>
    </div>
  );

  const draggableDiagnosticComponent = (
    <Draggable nodeRef={nodeRef} scale={1}>
      <div
        className="fixed bottom-2 right-16 rounded-md p-4 shadow-lg bg-card"
        ref={nodeRef}
      >
        <div className="flex flex-row justify-between">
          <h3>RHF Diagnostics</h3>
          <div
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border p-1 hover:scale-95"
            onClick={() => setIsOpen(false)}
          >
            <Icon iconName="Menu" />
          </div>
        </div>
        <div className="h-[30rem] max-h-[30rem] w-[25rem] overflow-y-auto overflow-x-hidden">
          {diagnosticComponent}
        </div>
      </div>
    </Draggable>
  );

  const renderComponent = isOpen ? draggableDiagnosticComponent : iconComponent;

  return createPortal(renderComponent, modalRef ?? document.body);
}
