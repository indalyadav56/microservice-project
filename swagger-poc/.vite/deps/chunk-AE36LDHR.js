import {
  nanoidSchema,
  z
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/oas-utils/dist/entities/cookie/cookie.js
var cookieSchema = z.object({
  uid: nanoidSchema.brand(),
  /**  Defines the cookie name and its value. A cookie definition begins with a name-value pair.  */
  name: z.string().default(""),
  value: z.string().default(""),
  /** Defines the host to which the cookie will be sent. */
  domain: z.string().optional(),
  /** Indicates the path that must exist in the requested URL for the browser to send the Cookie header. */
  path: z.string().optional()
});

export {
  cookieSchema
};
//# sourceMappingURL=chunk-AE36LDHR.js.map
