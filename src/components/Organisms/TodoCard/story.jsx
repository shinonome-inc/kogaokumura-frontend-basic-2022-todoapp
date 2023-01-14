import React, { useState, useEffect } from "react";
import Component from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import AlertManeger from "../AlertManager";

export default {
  component: Component,
  title: "Organisms/TodoCard",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => (
  <AlertHandlerProvider>
    <AlertManeger />
    <Component {...args} />
  </AlertHandlerProvider>
);

export const Default = Template.bind({});
