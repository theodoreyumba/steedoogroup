import { Metadata } from "next";

export const generateMetadata = (title: string): Metadata => {
    return {
      title: {default: title, template: "%s - AL"},
    };
};