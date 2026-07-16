(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93716,
  390392,
  (e) => {
    "use strict";
    var t,
      a,
      n,
      o,
      i,
      r,
      p,
      c = e.i(50270),
      l = e.i(170864),
      s =
        (((t = {}).CONTACT = "Contact"),
        (t.LEAD = "Lead"),
        (t.ACCOUNT = "Account"),
        (t.EVENT = "Event"),
        t),
      z = (((a = {}).EVERY_BOOKING = "every_booking"), (a.FIELD_EMPTY = "field_empty"), a),
      d =
        (((n = {}).DATE = "date"),
        (n.TEXT = "string"),
        (n.PHONE = "phone"),
        (n.CUSTOM = "custom"),
        (n.PICKLIST = "picklist"),
        (n.CHECKBOX = "boolean"),
        (n.DATETIME = "datetime"),
        (n.TEXTAREA = "textarea"),
        (n.MULTIPICKLIST = "multipicklist"),
        (n.USER_LOOKUP = "user_lookup"),
        (n.ACCOUNT_LOOKUP = "account_lookup"),
        n),
      m = (((o = {}).BOOKING_ORGANIZER = "booking_organizer"), o),
      g = (((i = {}).MATCHED_ACCOUNT = "matched_account"), i),
      b =
        (((r = {}).BOOKING_START_DATE = "booking_start_date"),
        (r.BOOKING_CREATED_DATE = "booking_created_date"),
        (r.BOOKING_CANCEL_DATE = "booking_cancel_date"),
        r);
    (((p = {}).ACCOUNT_LOOKUP_FIELD = "account_lookup_field"),
      (p.CUSTOM_SOQL_LOOKUP = "custom_soql_lookup"),
      (p.LEAD_OWNER = "lead_owner"),
      (p.CONTACT_OWNER = "contact_owner"),
      (p.ACCOUNT_OWNER = "account_owner"),
      e.s(
        [
          "AccountLookupFieldValueData",
          () => g,
          "DateFieldTypeData",
          () => b,
          "SalesforceFieldType",
          () => d,
          "SalesforceRecordEnum",
          () => s,
          "UserLookupFieldValueData",
          () => m,
          "WhenToWriteToRecord",
          () => z,
        ],
        390392
      ));
    let u = c.z.object({
      value: c.z.union([c.z.string(), c.z.boolean()]),
      fieldType: c.z.nativeEnum(d),
      whenToWrite: c.z.nativeEnum(z),
    });
    c.z.object({
      field: c.z.string(),
      fieldType: c.z.nativeEnum(d),
      value: c.z.union([c.z.string(), c.z.boolean()]),
      whenToWrite: c.z.nativeEnum(z),
    });
    let _ = c.z.record(c.z.string(), u),
      T = { IGNORE: "ignore", MUST_INCLUDE: "must_include" },
      y = c.z.object({
        field: c.z.string(),
        value: c.z.string(),
        action: c.z.enum([T.IGNORE, T.MUST_INCLUDE]),
      }),
      S = {
        SUB_REGION: "P1_SubRegion",
        COUNTRY_STATE_ZIP: "P2_Country_State_Zip",
        COUNTRY_STATE: "P3_Country_State",
        COUNTRY: "P4_Country",
        CHILD_ACCOUNTS_MAX: "P5_ChildAccounts_MAX",
        OPPORTUNITIES_MAX: "P6_Opportunities_MAX",
        CONTACTS_MAX: "P7_Contacts_MAX",
        LAST_ACTIVITY_MAX: "P8_LastActivity_MAX",
        CREATED_DATE_MIN: "P9_CreatedDate_MIN",
      },
      h = Object.values(S),
      C = c.z.object({ id: c.z.string(), enabled: c.z.boolean().default(!0) }),
      O = c.z
        .object({
          subRegionFieldName: c.z.string().optional(),
          bookerSubRegionFieldId: c.z.string().optional(),
          bookerCountryFieldId: c.z.string().optional(),
          bookerStateFieldId: c.z.string().optional(),
          bookerZipFieldId: c.z.string().optional(),
          useIpGeoFallback: c.z.boolean().optional(),
          rules: c.z.array(C).optional(),
        })
        .optional(),
      j = c.z
        .object({
          rrSkipToAccountLookupField: c.z.boolean().optional(),
          rrSKipToAccountLookupFieldName: c.z.string().optional(),
          rrSkipToCustomSoql: c.z.boolean().optional(),
          customSoqlQuery: c.z.string().max(2e3).optional(),
          tiebreaker: O,
        })
        .optional(),
      A = c.z.object({ writeToRecordObject: _.optional() });
    c.z
      .any()
      .refine((e) => "boolean" == typeof e || void 0 === e)
      .optional();
    let v = c.z.object({
        timestamp: c.z.string(),
        errorCode: c.z.string(),
        errorMessage: c.z.preprocess(
          (e) => ("string" == typeof e ? e : JSON.stringify(e)),
          c.z.string()
        ),
        rawMessage: c.z
          .preprocess((e) => {
            if (null != e) return "string" == typeof e ? e : JSON.stringify(e);
          }, c.z.string())
          .optional(),
        droppedFields: c.z.array(c.z.string()).optional(),
        eventCreated: c.z.boolean().optional(),
      }),
      E = l.eventTypeAppCardZod.extend({
        roundRobinLeadSkip: c.z.boolean().optional(),
        roundRobinSkipCheckRecordOn: c.z.nativeEnum(s).default(s.CONTACT).optional(),
        rrSkipFieldRules: c.z.array(y).optional(),
        ifFreeEmailDomainSkipOwnerCheck: c.z.boolean().optional(),
        roundRobinSkipFallbackToLeadOwner: c.z.boolean().optional(),
        skipContactCreation: c.z.boolean().optional(),
        createEventOn: c.z.nativeEnum(s).default(s.CONTACT).optional(),
        createNewContactUnderAccount: c.z.boolean().optional(),
        createLeadIfAccountNull: c.z.boolean().optional(),
        onBookingWriteToEventObject: c.z.boolean().optional(),
        onBookingWriteToEventObjectMap: c.z
          .record(c.z.string(), c.z.union([c.z.string(), c.z.boolean(), u]))
          .optional(),
        createEventOnLeadCheckForContact: c.z.boolean().optional(),
        onBookingChangeRecordOwner: c.z.boolean().optional(),
        onBookingChangeAccountOwner: c.z.boolean().optional(),
        onBookingWriteToAccountRecord: c.z.boolean().optional(),
        onBookingWriteToAccountRecordFields: c.z.record(c.z.string(), u).optional(),
        onBookingChangeRecordOwnerName: c.z.string().optional(),
        sendNoShowAttendeeData: c.z.boolean().optional(),
        sendNoShowAttendeeDataField: c.z.string().optional(),
        onBookingWriteToRecord: c.z.boolean().optional(),
        onBookingWriteToRecordFields: c.z.record(c.z.string(), u).optional(),
        onFallbackWriteToRecord: c.z.boolean().optional(),
        onFallbackWriteToRecordFields: c.z.record(c.z.string(), u).optional(),
        onFallbackCreateRecord: c.z.boolean().optional(),
        onFallbackCreateRecords: c.z
          .array(
            c.z.object({
              id: c.z.string().optional(),
              objectName: c.z.string(),
              fields: c.z.record(c.z.string(), u),
              skipIfBookingWithAccountOwner: c.z.boolean().optional(),
            })
          )
          .optional(),
        ignoreGuests: c.z.boolean().optional(),
        onCancelWriteToEventRecord: c.z.boolean().optional(),
        onCancelWriteToEventRecordFields: c.z.record(c.z.string(), u).optional(),
        onCancelWriteToRecord: c.z.boolean().optional(),
        onCancelWriteToRecordFields: c.z.record(c.z.string(), u).optional(),
        excludeAccountRecordTypes: c.z.array(c.z.string()).optional(),
        lastSyncError: v.nullish(),
        enableFuzzyDomainMatching: c.z.boolean().optional(),
        tiebreakerRules: c.z.array(C).optional(),
        showCrmOwnerBanner: c.z.boolean().optional(),
      }),
      k = c.z.object({ consumer_key: c.z.string().min(1), consumer_secret: c.z.string().min(1) });
    e.s(
      [
        "ALL_TIEBREAKER_RULE_IDS",
        0,
        h,
        "RRSkipFieldRuleActionEnum",
        0,
        T,
        "SALESFORCE_LOOKUP_FIELD_PATH_REGEX",
        0,
        /^[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)*$/,
        "TiebreakerRuleId",
        0,
        S,
        "appDataSchema",
        0,
        E,
        "appKeysSchema",
        0,
        k,
        "isWriteToBookingEntry",
        0,
        function (e) {
          return "object" == typeof e && null !== e && "value" in e && "fieldType" in e;
        },
        "routingFormIncompleteBookingDataSchema",
        0,
        A,
        "routingFormOptions",
        0,
        j,
        "validateFieldMapping",
        0,
        function (e) {
          let { field: t, fieldType: a, value: n } = e;
          if (!t.trim()) return "Field name is required";
          switch (a) {
            case d.CHECKBOX:
              if ("boolean" != typeof n)
                return `Checkbox field "${t}" requires a boolean value (True/False), got string "${n}"`;
              break;
            case d.DATE:
              if ("string" != typeof n || !Object.values(b).includes(n))
                return `Date field "${t}" requires a valid date reference (e.g. Booking Start Date)`;
              break;
            case d.TEXT:
            case d.PHONE:
            case d.PICKLIST:
            case d.CUSTOM:
              if ("string" != typeof n || "" === n.trim())
                return `Field "${t}" requires a non-empty text value`;
              break;
            case d.USER_LOOKUP:
              if ("string" != typeof n || !Object.values(m).includes(n))
                return `User lookup field "${t}" requires a valid user reference (e.g. Booking Organizer)`;
              break;
            case d.ACCOUNT_LOOKUP:
              if ("string" != typeof n || !Object.values(g).includes(n))
                return `Account lookup field "${t}" requires a valid account reference (e.g. Matched account)`;
          }
          return null;
        },
      ],
      93716
    );
  },
  101215,
  (e) => {
    "use strict";
    var t = e.i(247167);
    (t.default.env.NEXT_PUBLIC_STRIPE_TEAM_MONTHLY_PRICE_ID,
      t.default.env.STRIPE_PHONE_NUMBER_MONTHLY_PRICE_ID,
      e.s([
        "PREMIUM_MONTHLY_PLAN_PRICE",
        0,
        "price_1JfQxkH8UDiwIftkIKlXr5gU",
        "paymentOptions",
        0,
        [
          { label: "on_booking_option", value: "ON_BOOKING" },
          { label: "hold_option", value: "HOLD" },
        ],
      ]));
  },
  170864,
  (e) => {
    "use strict";
    var t = e.i(50270);
    let a = t.z.object({
      enabled: t.z.boolean().optional(),
      credentialId: t.z.number().optional(),
      appCategories: t.z.array(t.z.string()).optional(),
    });
    (t.z.object({}), e.s(["eventTypeAppCardZod", 0, a]));
  },
  175358,
  (e) => {
    "use strict";
    var t,
      a = (((t = {}).NEVER = "never"), (t.ALWAYS = "always"), (t.DAYS = "days"), t);
    e.s(["RefundPolicy", () => a]);
  },
  429037,
  (e) => {
    "use strict";
    var t = e.i(50270),
      a = e.i(175358),
      n = e.i(170864),
      o = e.i(101215);
    let i = [o.paymentOptions[0].value, ...o.paymentOptions.slice(1).map((e) => e.value)],
      r = t.z.enum(i),
      p = t.z.enum(["minutes", "hours", "days"]),
      c = n.eventTypeAppCardZod.merge(
        t.z.object({
          price: t.z.number(),
          currency: t.z.string(),
          paymentOption: r.optional(),
          enabled: t.z.boolean().optional(),
          refundPolicy: t.z.nativeEnum(a.RefundPolicy).optional(),
          refundDaysCount: t.z.number().optional(),
          refundCountCalendarDays: t.z.boolean().optional(),
          autoChargeNoShowFeeIfCancelled: t.z.boolean().optional(),
          autoChargeNoShowFeeTimeValue: t.z.number().optional(),
          autoChargeNoShowFeeTimeUnit: p.optional(),
        })
      ),
      l = t.z.object({
        client_id: t.z.string().startsWith("ca_").min(1),
        client_secret: t.z.string().startsWith("sk_").min(1),
        public_key: t.z.string().startsWith("pk_").min(1),
        webhook_secret: t.z.string().startsWith("whsec_").min(1),
      });
    e.s(["appDataSchema", 0, c, "appKeysSchema", 0, l, "autoChargeNoShowFeeTimeUnitEnum", 0, p]);
  },
  96877,
  (e) => {
    "use strict";
    var t = e.i(50270),
      a = e.i(170864);
    let n = t.z.object({ label: t.z.string(), value: t.z.string() });
    t.z.array(n);
    let o = [{ label: "on_booking_option", value: "ON_BOOKING" }],
      i = [o[0].value, ...o.slice(1).map((e) => e.value)];
    t.z.enum(i);
    let r = a.eventTypeAppCardZod.merge(
        t.z.object({
          price: t.z.number(),
          currency: t.z.string(),
          paymentOption: t.z.string().optional(),
          enabled: t.z.boolean().optional(),
          credentialId: t.z.number().optional(),
        })
      ),
      p = t.z.object({ client_id: t.z.string(), client_secret: t.z.string() });
    e.s(["PaypalPaymentOptions", 0, o, "appDataSchema", 0, r, "appKeysSchema", 0, p]);
  },
  551220,
  (e) => {
    "use strict";
    var t = e.i(170864),
      a = e.i(50270);
    let n = a.z.object({ label: a.z.string(), value: a.z.string() });
    a.z.array(n);
    let o = [{ label: "on_booking_option", value: "ON_BOOKING" }],
      i = [o[0].value, ...o.slice(1).map((e) => e.value)];
    a.z.enum(i);
    let r = t.eventTypeAppCardZod.merge(
        a.z.object({
          price: a.z.number(),
          currency: a.z.string(),
          paymentOption: a.z.string().optional(),
          enabled: a.z.boolean().optional(),
        })
      ),
      p = a.z.object({});
    e.s(["PaypalPaymentOptions", 0, o, "appDataSchema", 0, r, "appKeysSchema", 0, p]);
  },
  700447,
  (e) => {
    "use strict";
    var t = e.i(50270),
      a = e.i(170864);
    let n = t.z.object({ label: t.z.string(), value: t.z.string() });
    t.z.array(n);
    let o = [{ label: "on_booking_option", value: "ON_BOOKING" }],
      i = [o[0].value, ...o.slice(1).map((e) => e.value)];
    t.z.enum(i);
    let r = a.eventTypeAppCardZod.merge(
        t.z.object({
          price: t.z.number(),
          currency: t.z.string(),
          paymentOption: t.z.string().optional(),
          enabled: t.z.boolean().optional(),
          credentialId: t.z.number().optional(),
        })
      ),
      p = t.z.object({});
    e.s(["BTCPayPaymentOptions", 0, o, "appDataSchema", 0, r, "appKeysSchema", 0, p]);
  },
  55033,
  (e) => {
    "use strict";
    var t = e.i(50270),
      a = e.i(170864);
    let n = t.z.object({ label: t.z.string(), value: t.z.string() });
    t.z.array(n);
    let o = [{ label: "on_booking_option", value: "ON_BOOKING" }],
      i = [o[0].value, ...o.slice(1).map((e) => e.value)];
    t.z.enum(i);
    let r = a.eventTypeAppCardZod.merge(
        t.z.object({
          price: t.z.number(),
          currency: t.z.string(),
          paymentOption: t.z.string().optional(),
          enabled: t.z.boolean().optional(),
        })
      ),
      p = t.z.object({});
    e.s(["appDataSchema", 0, r, "appKeysSchema", 0, p, "paymentOptions", 0, o]);
  },
  129676,
  (e) => {
    "use strict";
    var t,
      a,
      n,
      o =
        (((t = {}).TEXT = "text"),
        (t.STRING = "string"),
        (t.DATE = "date"),
        (t.DATETIME = "datetime"),
        (t.PHONE = "phone"),
        (t.CHECKBOX = "checkbox"),
        (t.PICKLIST = "picklist"),
        (t.CUSTOM = "custom"),
        (t.TEXTAREA = "textarea"),
        t),
      i =
        (((a = {}).BOOKING_START_DATE = "booking_start_date"),
        (a.BOOKING_CREATED_DATE = "booking_created_date"),
        (a.BOOKING_CANCEL_DATE = "booking_cancel_date"),
        a),
      r = (((n = {}).EVERY_BOOKING = "every_booking"), (n.FIELD_EMPTY = "field_empty"), n);
    e.s(["CrmFieldType", () => o, "DateFieldType", () => i, "WhenToWrite", () => r]);
  },
  584634,
  260358,
  658373,
  981291,
  625542,
  48502,
  918873,
  111517,
  242045,
  455222,
  93819,
  15123,
  413713,
  487447,
  826752,
  321291,
  106734,
  137094,
  991870,
  238007,
  990078,
  666891,
  259628,
  360558,
  138204,
  224779,
  80478,
  58215,
  172657,
  306714,
  393737,
  202821,
  590017,
  351165,
  667026,
  945106,
  527617,
  327581,
  676421,
  721206,
  5392,
  23306,
  116610,
  681163,
  471453,
  468772,
  (e) => {
    "use strict";
    var t = e.i(50270),
      a = e.i(170864);
    let n = a.eventTypeAppCardZod.merge(t.z.object({})),
      o = t.z.object({
        client_id: t.z.string().min(1),
        client_secret: t.z.string().min(1),
        user_agent: t.z.string().min(1),
      });
    e.s(["appDataSchema", 0, n, "appKeysSchema", 0, o], 584634);
    let i = [{ label: "on_booking_option", value: "ON_BOOKING" }],
      r = [i[0].value, ...i.slice(1).map((e) => e.value)],
      p = t.z.enum(r),
      c = a.eventTypeAppCardZod.merge(
        t.z.object({
          price: t.z.number().int().positive(),
          currency: t.z.string(),
          paymentOption: p.optional(),
          enabled: t.z.boolean().optional(),
        })
      ),
      l = t.z.object({});
    (t.z.object({
      company_id: t.z.string().startsWith("biz_"),
      company_title: t.z.string().optional(),
    }),
      e.s(["appDataSchema", 0, c, "appKeysSchema", 0, l], 260358));
    let s = a.eventTypeAppCardZod,
      z = t.z.object({ client_id: t.z.string(), client_secret: t.z.string() });
    e.s(["appDataSchema", 0, s, "appKeysSchema", 0, z], 658373);
    let d = t.z.object({
        api_key: t.z.string().min(1),
        scale_plan: t.z.string().default("false"),
        legacy_api_key: t.z.string().optional(),
        legacy_room_hostname: t.z.string().optional(),
      }),
      m = t.z.object({});
    (t.z.object({ id: t.z.string() }),
      t.z.object({
        id: t.z.string(),
        preset: t.z.string(),
        status: t.z.string(),
        transcription: t.z.array(t.z.object({ format: t.z.string(), link: t.z.string().url() })),
      }));
    let g = t.z.object({
        user_id: t.z.string().nullable(),
        participant_id: t.z.string(),
        user_name: t.z.string().nullable(),
        join_time: t.z.number(),
        duration: t.z.number(),
      }),
      b = t.z.object({
        id: t.z.string(),
        room: t.z.string(),
        start_time: t.z.number(),
        duration: t.z.number(),
        ongoing: t.z.boolean(),
        max_participants: t.z.number(),
        participants: t.z.array(g),
      });
    (t.z.object({ data: t.z.array(b) }),
      e.s(["appDataSchema", 0, m, "appKeysSchema", 0, d], 981291));
    let u = a.eventTypeAppCardZod.merge(
        t.z.object({
          DATABUDDY_SCRIPT_URL: t.z
            .string()
            .optional()
            .default("https://cdn.databuddy.cc/databuddy.js")
            .or(t.z.undefined()),
          DATABUDDY_API_URL: t.z
            .string()
            .optional()
            .default("https://basket.databuddy.cc")
            .or(t.z.undefined()),
          CLIENT_ID: t.z.string().default("").optional(),
        })
      ),
      _ = t.z.object({});
    e.s(["appDataSchema", 0, u, "appKeysSchema", 0, _], 625542);
    let T = t.z.object({
        redirect_uris: t.z.string(),
        client_id: t.z.string(),
        client_secret: t.z.string(),
      }),
      y = t.z.object({});
    e.s(["appDataSchema", 0, y, "appKeysSchema", 0, T], 48502);
    let S = a.eventTypeAppCardZod.merge(
        t.z.object({ trackingId: t.z.string().default("").optional() })
      ),
      h = t.z.object({});
    e.s(["appDataSchema", 0, S, "appKeysSchema", 0, h], 918873);
    let C = t.z.object({}),
      O = t.z.object({
        app_id: t.z.string().min(1),
        app_secret: t.z.string().min(1),
        open_verfication_token: t.z.string().min(1),
      });
    e.s(["appDataSchema", 0, C, "appKeysSchema", 0, O], 111517);
    let j = a.eventTypeAppCardZod.merge(
        t.z.object({ trackingId: t.z.string().default("").optional() })
      ),
      A = t.z.object({});
    e.s(["appDataSchema", 0, j, "appKeysSchema", 0, A], 242045);
    let v = a.eventTypeAppCardZod.merge(t.z.object({ thankYouPage: t.z.string().optional() })),
      E = t.z.object({ app_key: t.z.string().min(1) });
    e.s(["appDataSchema", 0, v, "appKeysSchema", 0, E], 455222);
    let k = t.z.object({}),
      D = t.z.object({
        client_id: t.z.string().min(1),
        client_secret: t.z.string().min(1),
        redirect_uris: t.z.union([
          t.z.string().url().array(),
          t.z
            .string()
            .url()
            .transform((e) => [e]),
        ]),
      });
    e.s(["appDataSchema", 0, k, "appKeysSchema", 0, D], 93819);
    let I = t.z.object({}),
      K = t.z.object({
        client_id: t.z.string().min(1),
        client_secret: t.z.string().min(1),
        redirect_uris: t.z.union([
          t.z.string().url().array(),
          t.z
            .string()
            .url()
            .transform((e) => [e]),
        ]),
      });
    e.s(["appDataSchema", 0, I, "appKeysSchema", 0, K], 15123);
    let R = a.eventTypeAppCardZod.merge(
        t.z.object({
          trackingId: t.z.string().transform((e) => {
            let t = e.trim();
            return t.startsWith("GTM-") ? t : `GTM-${t}`;
          }),
        })
      ),
      f = t.z.object({});
    e.s(["appDataSchema", 0, R, "appKeysSchema", 0, f], 413713);
    let N = [{ label: "on_booking_option", value: "ON_BOOKING" }],
      P = [N[0].value, ...N.slice(1).map((e) => e.value)];
    t.z.enum(P);
    let L = a.eventTypeAppCardZod.merge(
        t.z.object({
          price: t.z.number(),
          currency: t.z.string(),
          paymentOption: t.z.string().optional(),
          enabled: t.z.boolean().optional(),
        })
      ),
      U = t.z.object({});
    e.s(["appDataSchema", 0, L, "appKeysSchema", 0, U], 487447);
    var F = e.i(129676);
    let B = t.z.object({
      value: t.z.union([t.z.string(), t.z.boolean()]),
      fieldType: t.z.nativeEnum(F.CrmFieldType),
      whenToWrite: t.z.nativeEnum(F.WhenToWrite),
    });
    t.z.object({
      field: t.z.string(),
      fieldType: t.z.nativeEnum(F.CrmFieldType),
      value: t.z.union([t.z.string(), t.z.boolean()]),
      whenToWrite: t.z.nativeEnum(F.WhenToWrite),
    });
    let W = a.eventTypeAppCardZod.extend({
        ignoreGuests: t.z.boolean().optional(),
        skipContactCreation: t.z.boolean().optional(),
        setOrganizerAsOwner: t.z.boolean().optional(),
        overwriteContactOwner: t.z.boolean().optional(),
        onBookingWriteToEventObject: t.z.boolean().optional(),
        onBookingWriteToEventObjectFields: t.z.record(t.z.string(), B).optional(),
        roundRobinLeadSkip: t.z.boolean().optional(),
        ifFreeEmailDomainSkipOwnerCheck: t.z.boolean().optional(),
        onBookingWriteToContactRecord: t.z.boolean().optional(),
        onBookingWriteToContactRecordFields: t.z.record(t.z.string(), B).optional(),
      }),
      M = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) });
    e.s(["appDataSchema", 0, W, "appKeysSchema", 0, M], 826752);
    let Z = a.eventTypeAppCardZod.merge(
        t.z.object({ SITE_ID: t.z.string().optional(), SCRIPT_URL: t.z.string().optional() })
      ),
      w = t.z.object({});
    e.s(["appDataSchema", 0, Z, "appKeysSchema", 0, w], 321291);
    let G = t.z.object({}),
      X = t.z.object({ client_id: t.z.string(), client_secret: t.z.string() });
    e.s(["appDataSchema", 0, G, "appKeysSchema", 0, X], 106734);
    let H = t.z.object({}),
      x = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) });
    e.s(["appDataSchema", 0, H, "appKeysSchema", 0, x], 137094);
    let Y = t.z.object({
        jitsiHost: t.z.string().optional(),
        jitsiPathPattern: t.z.string().optional(),
      }),
      q = t.z.object({});
    e.s(["appDataSchema", 0, q, "appKeysSchema", 0, Y], 991870);
    let V = t.z.object({}),
      $ = t.z.object({
        app_id: t.z.string().min(1),
        app_secret: t.z.string().min(1),
        open_verfication_token: t.z.string().min(1),
      });
    e.s(["appDataSchema", 0, V, "appKeysSchema", 0, $], 238007);
    let J = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) }),
      Q = t.z.object({});
    e.s(["appDataSchema", 0, Q, "appKeysSchema", 0, J], 990078);
    let ee = t.z.object({}),
      et = t.z.object({ invite_link: t.z.string().min(1) });
    e.s(["appDataSchema", 0, ee, "appKeysSchema", 0, et], 666891);
    let ea = a.eventTypeAppCardZod.merge(
        t.z.object({ MATOMO_URL: t.z.string().optional(), SITE_ID: t.z.string().optional() })
      ),
      en = t.z.object({});
    e.s(["appDataSchema", 0, ea, "appKeysSchema", 0, en], 259628);
    let eo = a.eventTypeAppCardZod.merge(
        t.z.object({
          trackingId: t.z.string().default("").optional(),
          trackingEvent: t.z
            .enum(["Lead", "CompleteRegistration", "Schedule", "PageView"])
            .optional(),
        })
      ),
      ei = t.z.object({});
    e.s(["appDataSchema", 0, eo, "appKeysSchema", 0, ei], 360558);
    let er = t.z.object({
        nextcloudTalkHost: t.z.string(),
        nextcloudTalkPattern: t.z.string().optional(),
        nextcloudTalkClientId: t.z.string(),
        nextcloudTalkClientSecret: t.z.string(),
      }),
      ep = t.z.object({});
    e.s(["appDataSchema", 0, ep, "appKeysSchema", 0, er], 138204);
    let ec = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) }),
      el = t.z.object({ client_id: t.z.string(), client_secret: t.z.string() });
    e.s(["appDataSchema", 0, el, "appKeysSchema", 0, ec], 224779);
    let es = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) }),
      ez = t.z.object({ client_id: t.z.string(), client_secret: t.z.string() });
    e.s(["appDataSchema", 0, ez, "appKeysSchema", 0, es], 80478);
    let ed = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) }),
      em = t.z.object({ client_id: t.z.string(), client_secret: t.z.string() });
    e.s(["appDataSchema", 0, em, "appKeysSchema", 0, ed], 58215);
    let eg = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) }),
      eb = a.eventTypeAppCardZod;
    e.s(["appDataSchema", 0, eb, "appKeysSchema", 0, eg], 172657);
    let eu = a.eventTypeAppCardZod.merge(
        t.z.object({
          PLAUSIBLE_URL: t.z
            .string()
            .optional()
            .default("https://plausible.io/js/script.js")
            .or(t.z.undefined()),
          trackingId: t.z.string().default("").optional(),
        })
      ),
      e_ = t.z.object({});
    e.s(["appDataSchema", 0, eu, "appKeysSchema", 0, e_], 306714);
    let eT = a.eventTypeAppCardZod.merge(
        t.z.object({ TRACKING_ID: t.z.string().optional(), API_HOST: t.z.string().optional() })
      ),
      ey = t.z.object({});
    e.s(["appDataSchema", 0, eT, "appKeysSchema", 0, ey], 393737);
    let eS = a.eventTypeAppCardZod,
      eh = t.z.object({});
    e.s(["appDataSchema", 0, eS, "appKeysSchema", 0, eh], 202821);
    let eC = t.z.object({ api_key: t.z.string(), api_route: t.z.string() }),
      eO = t.z.object({});
    e.s(["appDataSchema", 0, eO, "appKeysSchema", 0, eC], 590017);
    let ej = t.z.object({}),
      eA = t.z.object({
        client_id: t.z.string().min(1),
        client_secret: t.z.string().min(1),
        base_url: t.z.string().min(1),
      });
    e.s(["appDataSchema", 0, ej, "appKeysSchema", 0, eA], 351165);
    let ev = a.eventTypeAppCardZod.merge(t.z.object({ trackingId: t.z.string() })),
      eE = t.z.object({});
    e.s(["appDataSchema", 0, ev, "appKeysSchema", 0, eE], 667026);
    let ek = a.eventTypeAppCardZod.merge(t.z.object({ isSunrise: t.z.boolean() })),
      eD = t.z.object({});
    e.s(["appDataSchema", 0, ek, "appKeysSchema", 0, eD], 945106);
    let eI = a.eventTypeAppCardZod.merge(t.z.object({ SITE_ID: t.z.string().optional() })),
      eK = t.z.object({});
    e.s(["appDataSchema", 0, eI, "appKeysSchema", 0, eK], 527617);
    let eR = a.eventTypeAppCardZod.merge(
        t.z.object({
          SITE_ID: t.z.string().optional(),
          SCRIPT_URL: t.z
            .string()
            .optional()
            .default("https://cloud.umami.is/script.js")
            .or(t.z.undefined()),
        })
      ),
      ef = t.z.object({});
    e.s(["appDataSchema", 0, eR, "appKeysSchema", 0, ef], 327581);
    let eN = t.z.object({}),
      eP = t.z.object({
        mode: t.z.string().min(1),
        region: t.z.string().min(1),
        api_key: t.z.string().min(1),
        webhook_secret: t.z.string().min(1),
      });
    e.s(["appDataSchema", 0, eN, "appKeysSchema", 0, eP], 676421);
    let eL = t.z.object({}),
      eU = t.z.object({ client_id: t.z.string().min(64), client_secret: t.z.string().min(64) });
    e.s(["appDataSchema", 0, eL, "appKeysSchema", 0, eU], 721206);
    let eF = a.eventTypeAppCardZod.merge(t.z.object({ isSunrise: t.z.boolean() })),
      eB = t.z.object({});
    e.s(["appDataSchema", 0, eF, "appKeysSchema", 0, eB], 5392);
    let eW = t.z.object({}),
      eM = t.z.object({ invite_link: t.z.string().min(1) });
    e.s(["appDataSchema", 0, eW, "appKeysSchema", 0, eM], 23306);
    let eZ = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) }),
      ew = a.eventTypeAppCardZod;
    e.s(["appDataSchema", 0, ew, "appKeysSchema", 0, eZ], 116610);
    let eG = t.z.object({}),
      eX = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) });
    e.s(["appDataSchema", 0, eG, "appKeysSchema", 0, eX], 681163);
    let eH = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) }),
      ex = a.eventTypeAppCardZod;
    e.s(["appDataSchema", 0, ex, "appKeysSchema", 0, eH], 471453);
    let eY = t.z.object({}),
      eq = t.z.object({ client_id: t.z.string().min(1), client_secret: t.z.string().min(1) });
    e.s(["appDataSchema", 0, eY, "appKeysSchema", 0, eq], 468772);
  },
]);
