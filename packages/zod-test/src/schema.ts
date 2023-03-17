/* eslint-disable max-lines */

import { z } from 'zod';

const newtorkSchema = z.enum([
  'HISTORICAL',
  'HUBN_UP',
  'REPRESENTATIVE_NETWORK',
  'AS_ASSOCIES',
]);

const representativeNetworkSchema = z.enum([
  'PEGASE_GESTION_PRIVEE',
  'HELIX_FINANCE',
  'PAT_PATRIMOINE',
  'NEXUS',
  'EXPERT_PREVOYANCE',
  'LEGALFI_TRINITY',
  'HALIATUS_PATRIMOINE',
  'MAHR_ASSOCIATES',
  'MCB_FINANCE',
]);

const commontEventSchemaProperties = {
  contractId: z.string().uuid(),
  createdAt: z.string(),
  createdByType: z.enum(['CognitoUser', 'CanopiaBackend', 'ExternalPartner']),
  createdBy: z.string(),
  version: z.number(),
  GSI1_PK: z.string().optional(),
  GSI1_SK: z.string().optional(),
};

export const schema = z.union([
  z
    .object({
      eventType: z.literal('CONTRACT_CREATED'),
      payload: z
        .object({
          network: newtorkSchema,
          representativeNetwork: representativeNetworkSchema.optional(),
          clientId: z.string().uuid(),
          product: z.enum([
            'ARMADA_VIE',
            'ARMADA_CAPI',
            'ELITE_RETRAITE',
            'ARTHEMIS_VIE',
            'OTHER',
          ]),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_DELETED'),
      payload: z.object({ subscriptionId: z.string().uuid() }).strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_UPDATED'),
      payload: z
        .object({
          rawInvestmentAmount: z.number().optional(),
          scheduledPayments: z.boolean().optional(),
          entranceCostsPercentage: z.number().optional(),
          patrimonialGoal: z
            .enum([
              'CAPITAL_APPRECIATION',
              'PREPARATION_FOR_RETIREMENT',
              'INHERITANCE',
              'INCOME',
              'FORESIGHT',
              'OTHER',
              'FINANCE_A_LONG_TERM_PROJECT',
              'IN_CASE_OF_HARD_TIMES',
              'USE_A_CONTRACT_AS_COLLATERAL_INSTRUMENT',
              'HAVE_IMMEDIATE_ADDITIONAL_INCOME',
            ])
            .optional(),
          subscriptionPeriodType: z.enum(['FIXED', 'LIFE']).optional(),
          managementFeeRate: z
            .enum(['DEFAULT_RATE', 'DEROGATED_RATE'])
            .optional(),
          subscriptionClientLegalStatus: z
            .enum(['INDIVIDUAL', 'SELF_EMPLOYED'])
            .optional(),
          otherPatrimonialGoal: z.union([z.string(), z.null()]).optional(),
          subscriptionPeriod: z.union([z.number(), z.null()]).optional(),
          deductPaymentsInTaxes: z.union([z.boolean(), z.null()]).optional(),
          fiscalYearStartMonth: z
            .union([
              z.literal('JANUARY'),
              z.literal('FEBRUARY'),
              z.literal('MARCH'),
              z.literal('APRIL'),
              z.literal('MAY'),
              z.literal('JUNE'),
              z.literal('JULY'),
              z.literal('AUGUST'),
              z.literal('SEPTEMBER'),
              z.literal('OCTOBER'),
              z.literal('NOVEMBER'),
              z.literal('DECEMBER'),
              z.literal(null),
            ])
            .optional(),
          isContributionsPayerDifferentFromClient: z
            .union([z.boolean(), z.null()])
            .optional(),
          contributionPayerCompanyName: z
            .union([z.string(), z.null()])
            .optional(),
          contributionPayerCompanyRcsNumber: z
            .union([z.string(), z.null()])
            .optional(),
          contributionPayerCompanyAddress: z
            .union([z.string(), z.null()])
            .optional(),
          contributionPayerCompanyCity: z
            .union([z.string(), z.null()])
            .optional(),
          contributionPayerCompanyPostalCode: z
            .union([z.string(), z.null()])
            .optional(),
          contributionPayerCompanyCountry: z
            .union([
              z.literal('FRANCE_METROPOLE'),
              z.literal('FRANCE_GUYANA'),
              z.literal('FRANCE_GUADELOUPE'),
              z.literal('FRANCE_MAYOTTE'),
              z.literal('FRANCE_MARTINIQUE'),
              z.literal('FRANCE_REUNION'),
              z.literal('SAINT_PIERRE_AND_MIQUELON'),
              z.literal('SAINT_BARTHÉLEMY'),
              z.literal('SAINT_MARTIN'),
              z.literal('WALLIS_AND_FUTUNA'),
              z.literal('FRENCH_POLYNESIA'),
              z.literal('NEW_CALEDONIA'),
              z.literal('AFGHANISTAN'),
              z.literal('SOUTH_AFRICA'),
              z.literal('OLAND_ISLANDS'),
              z.literal('ALBANIA'),
              z.literal('ALGERIA'),
              z.literal('GERMANY'),
              z.literal('ANDORRA'),
              z.literal('ANGOLA'),
              z.literal('ANGUILLA'),
              z.literal('ANTARCTIC'),
              z.literal('ANTIGUA_AND_BARBUDA'),
              z.literal('SAUDI_ARABIA'),
              z.literal('ARGENTINA'),
              z.literal('ARMENIA'),
              z.literal('ARUBA'),
              z.literal('AUSTRALIA'),
              z.literal('AUSTRIA'),
              z.literal('AZERBAIJAN'),
              z.literal('BAHAMAS'),
              z.literal('BAHRAIN'),
              z.literal('BANGLADESH'),
              z.literal('BARBADOS'),
              z.literal('BELORUS'),
              z.literal('BELGIUM'),
              z.literal('BELLE'),
              z.literal('BENIGN'),
              z.literal('BERMUDA'),
              z.literal('BHUTAN'),
              z.literal('BOLIVIA'),
              z.literal('NETHERLANDS_CARIBBEAN'),
              z.literal('BOSNIA_AND_HERZEGOVINA'),
              z.literal('BOTSWANA'),
              z.literal('ILE_BOUVET'),
              z.literal('BRAZIL'),
              z.literal('BRUNETTE'),
              z.literal('BULGARIA'),
              z.literal('BURKINA_FASO'),
              z.literal('BURUNDI'),
              z.literal('CAYMAN_ISLANDS'),
              z.literal('CAMBODIA'),
              z.literal('CAMEROON'),
              z.literal('CANADA'),
              z.literal('GREEN_CAP'),
              z.literal('CENTRAL_AFRICAN_REPUBLIC'),
              z.literal('CHILE'),
              z.literal('CHINA'),
              z.literal('CHRISTMAS_ISLAND'),
              z.literal('CHREY'),
              z.literal('ILE_COCOS'),
              z.literal('COLOMBIA'),
              z.literal('COMOROS'),
              z.literal('REPUBLIC_OF_CONGO'),
              z.literal('DEMOCRATIC_REPUBLIC_OF_CONGO'),
              z.literal('COOK_ISLAND'),
              z.literal('SOUTH_KOREA'),
              z.literal('NORTH_KOREA'),
              z.literal('COSTA_RICA'),
              z.literal('IVORY_COAST'),
              z.literal('CROATIA'),
              z.literal('CUBA'),
              z.literal('CURACAO'),
              z.literal('DENMARK'),
              z.literal('DJIBOUTI'),
              z.literal('DOMINICAN_REPUBLIC'),
              z.literal('DOMINICA'),
              z.literal('EGYPT'),
              z.literal('SALVADOR'),
              z.literal('UNITED_ARAB_EMIRATES'),
              z.literal('ECUADOR'),
              z.literal('ERITREA'),
              z.literal('SPAIN'),
              z.literal('ESTONIA'),
              z.literal('UNITED_STATES'),
              z.literal('ETHIOPIA'),
              z.literal('MALOUINES'),
              z.literal('FAROE_ISLANDS'),
              z.literal('FIDJI'),
              z.literal('FINLAND'),
              z.literal('GABON'),
              z.literal('GAMBIA'),
              z.literal('GEORGIA'),
              z.literal('SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS'),
              z.literal('GHANA'),
              z.literal('GIBRALTAR'),
              z.literal('GREECE'),
              z.literal('GRENADE'),
              z.literal('GREENLAND'),
              z.literal('GUAM'),
              z.literal('GUATEMALA'),
              z.literal('GUERNSEY'),
              z.literal('GUINEA'),
              z.literal('GUINEA_BISSAU'),
              z.literal('EQUATORIAL_GUINEA'),
              z.literal('GUYANA'),
              z.literal('HAITI'),
              z.literal('HEARD_AND_MACDONALD_ISLANDS'),
              z.literal('HONDURAS'),
              z.literal('HONG_KONG'),
              z.literal('HUNGARY'),
              z.literal('ISLE_OF_MAN'),
              z.literal('MINOR_REMOTE_MINOR_ISLANDS'),
              z.literal('BRITISH_VIRGIN_ISLANDS'),
              z.literal('VIRGIN_ISLANDS_OF_THE_UNITED_STATES'),
              z.literal('INDIA'),
              z.literal('INDONESIA'),
              z.literal('IRAN'),
              z.literal('IRAQ'),
              z.literal('IRELAND'),
              z.literal('ICELAND'),
              z.literal('ISRAEL'),
              z.literal('ITALY'),
              z.literal('JAMAICA'),
              z.literal('JAPAN'),
              z.literal('JERSEY'),
              z.literal('JORDAN'),
              z.literal('KAZAKHSTAN'),
              z.literal('KENYA'),
              z.literal('KYRGYZSTAN'),
              z.literal('KIRIBATI'),
              z.literal('KUWAIT'),
              z.literal('LAOS'),
              z.literal('LESOTHO'),
              z.literal('LATVIA'),
              z.literal('LEBANON'),
              z.literal('LIBERIA'),
              z.literal('LIBYA'),
              z.literal('LICHTENSTEIN'),
              z.literal('LITHUANIA'),
              z.literal('LUXEMBOURG'),
              z.literal('MACAO'),
              z.literal('MACEDONIA'),
              z.literal('MADAGASCAR'),
              z.literal('MALAYSIA'),
              z.literal('MALAWI'),
              z.literal('MALDIVES'),
              z.literal('MALI'),
              z.literal('MALTA'),
              z.literal('NORTHERN_MARIANA_ISLANDS'),
              z.literal('MOROCCO'),
              z.literal('MARSHALL_ISLANDS'),
              z.literal('MAURITIUS'),
              z.literal('MAURITANIA'),
              z.literal('MEXICO'),
              z.literal('MICRONESIA'),
              z.literal('MOLDOVA'),
              z.literal('MONACO'),
              z.literal('MONGOLIA'),
              z.literal('MONTENEGRO'),
              z.literal('MONTSERRAT'),
              z.literal('MOZAMBIQUE'),
              z.literal('BURMA'),
              z.literal('NAMIBIA'),
              z.literal('NAURU'),
              z.literal('NEPAL'),
              z.literal('NICARAGUA'),
              z.literal('NIGER'),
              z.literal('NIGERIA'),
              z.literal('NIOUE'),
              z.literal('ILE_NORFOLK'),
              z.literal('NORWAY'),
              z.literal('NEW_ZEALAND'),
              z.literal('BRITISH_TERRITORY_OF_THE_INDIAN_OCEAN'),
              z.literal('OMAN'),
              z.literal('UGANDA'),
              z.literal('UZBEKISTAN'),
              z.literal('PAKISTAN'),
              z.literal('PALAOS'),
              z.literal('PALESTINE'),
              z.literal('PANAMA'),
              z.literal('PAPUA_NEW_GUINEA'),
              z.literal('PARAGUAY'),
              z.literal('NETHERLANDS'),
              z.literal('PERU'),
              z.literal('PHILIPPINES'),
              z.literal('PITCAIRN_ISLANDS'),
              z.literal('POLAND'),
              z.literal('PORTO_RICO'),
              z.literal('PORTUGAL'),
              z.literal('QATAR'),
              z.literal('ROMANIA'),
              z.literal('UK'),
              z.literal('RUSSIA'),
              z.literal('RWANDA'),
              z.literal('ARAB_REPUBLIC_SAHRAWI_DEMOCRATIC'),
              z.literal('SAINTE_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA'),
              z.literal('ST_LUCIA'),
              z.literal('SAINT_CHRISTOPHE_AND_NEVÈS'),
              z.literal('SAN_MARINO'),
              z.literal('SINT_MAARTEN'),
              z.literal('HOLY_SEE'),
              z.literal('SAINT_VINCENT_AND_GRENADINES'),
              z.literal('SOLOMON'),
              z.literal('SAMOA'),
              z.literal('AMERICAN_SAMOA'),
              z.literal('SAO_TOME_AND_PRINCIPE'),
              z.literal('SENEGAL'),
              z.literal('SERBIA'),
              z.literal('SEYCHELLES'),
              z.literal('SIERRA_LEONE'),
              z.literal('SINGAPORE'),
              z.literal('SOLVAKIA'),
              z.literal('SLOVENIA'),
              z.literal('SOMALIA'),
              z.literal('SUDAN'),
              z.literal('SOUTH_SUDAN'),
              z.literal('SRI_LANKA'),
              z.literal('SWEDEN'),
              z.literal('SWISS'),
              z.literal('SURINAME'),
              z.literal('SVALBARD_AND_JAN_MAYEN_ISLAND'),
              z.literal('SWAZILAND'),
              z.literal('SYRIA'),
              z.literal('TAJIKISTAN'),
              z.literal('TAÏWAN'),
              z.literal('TANZANIA'),
              z.literal('CHAD'),
              z.literal('CZECH_REPUBLIC'),
              z.literal('FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS'),
              z.literal('THAILAND'),
              z.literal('EAST_TIMOR'),
              z.literal('TOGO'),
              z.literal('TOKELAU'),
              z.literal('TONGA'),
              z.literal('TRINITY_AND_TOBAGO'),
              z.literal('TUNISIA'),
              z.literal('TURKMENISTAN'),
              z.literal('TURKISH_AND_CAICOS_ISLANDS'),
              z.literal('TURKEY'),
              z.literal('TUVALU'),
              z.literal('UKRAINE'),
              z.literal('URUGUAY'),
              z.literal('VANUATU'),
              z.literal('VENEZUELA'),
              z.literal('VIETNAM'),
              z.literal('YEMEN'),
              z.literal('ZAMBIA'),
              z.literal('ZIMBABWE'),
              z.literal('OTHER'),
              z.literal(null),
            ])
            .optional(),
          contributionPayerCompanyRepresentative: z
            .union([z.string(), z.null()])
            .optional(),
          scheduledPaymentsPeriodicity: z
            .enum(['MONTHLY', 'QUARTERLY', 'HALF_YEARLY', 'YEARLY'])
            .optional(),
          scheduledPaymentsRawAmount: z.number().optional(),
          scheduledPaymentsCostPercentage: z.number().optional(),
          scheduledPaymentsFirstPaymentDate: z.string().optional(),
          yearlyScheduledPaymentsAdjustment: z.boolean().optional(),
          ibanInitialPayment: z.union([z.string(), z.null()]).optional(),
          bicInitialPayment: z.union([z.string(), z.null()]).optional(),
          ribInitialPayment: z
            .union([
              z.object({ updatedAt: z.string(), fileKey: z.string() }).strict(),
              z.null(),
            ])
            .optional(),
          differentRibForScheduledAndInitialPayment: z.boolean().optional(),
          ibanScheduledPayments: z.union([z.string(), z.null()]).optional(),
          bicScheduledPayments: z.union([z.string(), z.null()]).optional(),
          ribScheduledPayments: z
            .union([
              z.object({ updatedAt: z.string(), fileKey: z.string() }).strict(),
              z.null(),
            ])
            .optional(),
          adviceReportProof: z
            .object({ updatedAt: z.string(), fileKey: z.string() })
            .strict()
            .optional(),
          fundsOriginProof: z
            .object({ updatedAt: z.string(), fileKey: z.string() })
            .strict()
            .optional(),
          freeClauseProof: z
            .object({ updatedAt: z.string(), fileKey: z.string() })
            .strict()
            .optional(),
          managementOptionDocument: z
            .object({ updatedAt: z.string(), fileKey: z.string() })
            .strict()
            .optional(),
          optionalDocuments: z
            .array(
              z
                .object({
                  updatedAt: z.string(),
                  fileKey: z.string(),
                  label: z.string(),
                })
                .strict(),
            )
            .optional(),
          paymentMode: z
            .enum(['DIRECT_DEBIT', 'TRANSFER', 'CHEQUE'])
            .optional(),
          doesntAttachPaymentOrder: z.union([z.boolean(), z.null()]).optional(),
          paymentOrderDocument: z
            .union([
              z.object({ updatedAt: z.string(), fileKey: z.string() }).strict(),
              z.null(),
            ])
            .optional(),
          initialPaymentAllocation: z
            .array(
              z
                .object({
                  isinCode: z.string(),
                  name: z.string(),
                  complexProduct: z.boolean(),
                  needsSignedAnnex: z.boolean(),
                  portfolioAllocationInPercent: z.number().gte(0).lte(100),
                  managementFirm: z.string(),
                  supportType: z.string(),
                  supportCategoryLabel: z.string(),
                })
                .strict(),
            )
            .optional(),
          managementMode: z
            .enum(['FREE', 'UNDER_MANDATE', 'COMBINED'])
            .optional(),
          sourceOfFunding: z
            .enum([
              'INHERITANCE',
              'TRANSFER_OF_PROPERTY',
              'SALE_OF_REAL_ESTATE_ASSETS',
              'ALREADY_BUILT_SAVINGS',
              'PROFESSIONAL_ACTIVITY_CAPITAL',
              'WIN_AT_GAMES',
              'COMPENSATION',
              'CREDIT',
            ])
            .optional(),
          freeManagementPercentage: z.union([z.number(), z.null()]).optional(),
          discretionaryManagementPercentage: z
            .union([z.number(), z.null()])
            .optional(),
          mandateName: z
            .union([
              z.literal('CONVICTION_TERRITOIRES'),
              z.literal('CONVICTION_INFRASTRUCTURES'),
              z.literal('CONVICTION_INTELLIGENCE_ARTIFICIELLE'),
              z.literal('GENERATION_BAS_CARBONE'),
              z.literal('FIDELITY_TARGET'),
              z.literal(null),
            ])
            .optional(),
          scheduledPaymentsManagementMode: z
            .enum(['FREE', 'UNDER_MANDATE'])
            .optional(),
          scheduledPaymentsAllocation: z
            .array(
              z
                .object({
                  isinCode: z.string(),
                  name: z.string(),
                  complexProduct: z.boolean(),
                  needsSignedAnnex: z.boolean(),
                  portfolioAllocationInPercent: z.number().gte(0).lte(100),
                  managementFirm: z.string(),
                  supportType: z.string(),
                  supportCategoryLabel: z.string(),
                })
                .strict(),
            )
            .optional(),
          hasManagementOption: z.boolean().optional(),
          managementOption: z
            .union([
              z.literal('PROGRESSIVE_INVESTMENT'),
              z.literal('CAPITAL_GAINS_REVITALIZATION'),
              z.literal('AUTOMATIC_REBALANCING'),
              z.literal('STOP_LOSS'),
              z.literal('STOP_LOSS_AND_CAPITAL_GAINS_SECURING'),
              z.literal('CAPITAL_GAINS_SECURING'),
              z.literal(null),
            ])
            .optional(),
          progressiveInvestmentTotalAmount: z
            .union([z.number(), z.null()])
            .optional(),
          progressiveInvestmentPeriodicity: z
            .union([
              z.literal('MONTHLY'),
              z.literal('QUARTERLY'),
              z.literal('HALF_YEARLY'),
              z.literal('YEARLY'),
              z.literal(null),
            ])
            .optional(),
          progressiveInvestmentArbitragesNumber: z
            .union([z.number(), z.null()])
            .optional(),
          progressiveInvestmentFirstArbitrageDate: z
            .union([z.string(), z.null()])
            .optional(),
          progressiveInvestmentInitialSupports: z
            .union([
              z.array(
                z
                  .object({
                    isinCode: z.string(),
                    name: z.string(),
                    amountToDisinvest: z.number(),
                  })
                  .strict(),
              ),
              z.null(),
            ])
            .optional(),
          progressiveInvestmentTargetSupports: z
            .union([
              z.array(
                z
                  .object({
                    isinCode: z.string(),
                    name: z.string(),
                    percentage: z.number().gte(0).lte(100),
                  })
                  .strict(),
              ),
              z.null(),
            ])
            .optional(),
          clauseType: z.enum(['GENERAL', 'FREE']).optional(),
          freeClauseInfoMode: z
            .union([z.literal('ANNEX'), z.literal('TEXT'), z.literal(null)])
            .optional(),
          freeClauseText: z.union([z.string(), z.null()]).optional(),
          additionalDeathGuarantee: z.boolean().optional(),
          additionalAccidentalDeathguarantee: z.boolean().optional(),
          mortalityOption: z.boolean().optional(),
          exonerateScheduledPaymentOption: z.boolean().optional(),
          clientHasSeenPrecontractDocs: z.boolean().optional(),
          clientHasApprovedSummary: z.boolean().optional(),
          currentPage: z
            .enum([
              'INITIAL_PAYMENT',
              'SCHEDULED_PAYMENTS',
              'MANAGEMENT',
              'INITIAL_PAYMENT_ALLOCATION',
              'INITIAL_PAYMENT_ALLOCATION_RESULT',
              'SCHEDULED_PAYMENTS_MANAGEMENT',
              'SCHEDULED_PAYMENTS_ALLOCATION',
              'DISCRETIONARY_MANAGEMENT_OPTION',
              'BENEFICIARY_CLAUSE',
              'CLIENT_DOCUMENTS',
              'PRECONTRACT_DOCUMENTS',
              'ELECTRONIC_SIGNATURE',
              'HAND_WRITTEN_SIGNATURE',
              'SUMMARY',
            ])
            .optional(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('INITIAL_ALLOCATION_VALIDATION_REQUESTED'),
      payload: z
        .object({
          subscriptionId: z.string().uuid(),
          aptimumAnalysisId: z.string().uuid(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('INITIAL_ALLOCATION_VALIDATION_RECEIVED'),
      payload: z
        .object({
          aptimumAnalysisId: z.string(),
          valuationDate: z.string(),
          volatility: z.number(),
          priips: z.number(),
          quality: z.object({
            good: z.number(),
            bad: z.number(),
            notRated: z.number(),
          }),
          ratedQuality: z.object({ good: z.number(), bad: z.number() }),
          priipsPerSupport: z.record(z.number()),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('COMPLEX_PRODUCT_QUIZZ_COMPLETED'),
      payload: z
        .object({ idQuizz: z.string(), supportIsin: z.string() })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_SIGNATURE_UPDATED'),
      payload: z
        .object({
          currentSignerId: z.string().uuid(),
          signatureId: z.string().uuid(),

          status: z.enum([
            'ready',
            'expired',
            'completed',
            'canceled',
            'failed',
            'pending',
          ]),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_SAVED'),
      payload: z.object({
        subscriptionId: z.string().uuid(),
        signatureType: z.enum(['ELECTRONIC', 'HAND_WRITTEN']).optional(),
        suravenirContractId: z.string().optional(),
      }),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_VALIDATED'),
      payload: z.object({ subscriptionId: z.string().uuid() }).strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_INVALIDATED'),
      payload: z.object({ subscriptionId: z.string().uuid() }).strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_PROVIDER_VALIDATED'),
      payload: z.object({ subscriptionId: z.string().uuid() }).strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_PROVIDER_INVALIDATED'),
      payload: z.object({ subscriptionId: z.string().uuid() }).strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('SUBSCRIPTION_SIGNATURES_REQUESTED'),
      payload: z
        .object({
          subscriptionId: z.string().uuid(),
          advisorId: z.string().uuid(),
          advisorGivenName: z.string(),
          advisorFamilyName: z.string(),
          advisorEmail: z.string(),
          advisorPhone: z.string(),
          clientId: z.string().uuid(),
          clientGivenName: z.string(),
          clientFamilyName: z.string(),
          clientEmail: z.string(),
          clientPhone: z.string(),
          files: z.array(
            z.object({
              fileName: z.string().optional(),
              downloadUrl: z.string(),
              fileKey: z.string(),
              signatureFields: z
                .array(
                  z.object({
                    name: z.string().optional(),
                    signerIndex: z.number(),
                    x: z.number().optional(),
                    y: z.number().optional(),
                    page: z.number().optional(),
                  }),
                )
                .optional(),
              documentType: z.literal('pdf-for-presentation').optional(),
              metadata: z.record(z.string()).optional(),
            }),
          ),
          currentSignerId: z.string().uuid(),
          signatureId: z.string().uuid(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('OPERATION_STARTED'),
      payload: z
        .object({
          fpFinanceContractId: z.number(),
          operationId: z.string().uuid(),
          operationType: z.enum(['ARBITRAGE', 'PAYMENT']),
          creationDate: z.string(),
          clientId: z.string().uuid(),
          product: z
            .enum([
              'ARMADA_VIE',
              'ARMADA_CAPI',
              'ELITE_RETRAITE',
              'ARTHEMIS_VIE',
              'OTHER',
            ])
            .optional(),
          providerContractId: z.string(),
          fpFinanceProduct: z.string().optional(),
          network: newtorkSchema.optional(),
          representativeNetwork: representativeNetworkSchema.optional(),
          adviceReportFpDocumentId: z.number(),
          operationSlipFpDocumentId: z.number(),
          movements: z.array(
            z
              .object({
                providerContractId: z.string(),
                fpFinanceSupportId: z.number(),
                isinCode: z.string(),
                finalSituation: z.number(),
                initialSituation: z.number(),
                delta: z.number(),
                isMandate: z.boolean(),
                complexProductQuizzId: z.string().optional(),
              })
              .strict(),
          ),
          payment: z
            .object({
              providerContractId: z.string(),
              fpFinanceContractId: z.number(),
              amount: z.number(),
              feePercentage: z.number(),
              fundOrigin: z.enum([
                'INHERITANCE',
                'TRANSFER_OF_PROPERTY',
                'SALE_OF_REAL_ESTATE_ASSETS',
                'ALREADY_BUILT_SAVINGS',
                'PROFESSIONAL_ACTIVITY_CAPITAL',
                'WIN_AT_GAMES',
                'COMPENSATION',
                'CREDIT',
              ]),
              paymentMode: z.union([
                z
                  .object({
                    type: z.literal('DIRECT_DEBIT'),
                    iban: z.string(),
                    bic: z.string(),
                    ribFileKey: z.string(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal('CHEQUE'),
                    chequeNumber: z.number(),
                  })
                  .strict(),
              ]),
              isScheduled: z.boolean(),
              scheduledPayment: z
                .object({
                  operationType: z.enum(['SETUP', 'MODIFICATION', 'DELETION']),
                  frequency: z.enum([
                    'MONTHLY',
                    'QUARTERLY',
                    'HALF_YEARLY',
                    'YEARLY',
                  ]),
                  yearlyScheduledPaymentsAdjustment: z.boolean(),
                  firstPaymentDate: z.string(),
                })
                .strict()
                .optional(),
              fundOriginDocumentFileKey: z.string().optional(),
            })
            .strict()
            .optional(),
          arbitrage: z
            .object({ feePercentage: z.number() })
            .strict()
            .optional(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('OPERATION_SIGNATURE_REQUESTED'),
      payload: z
        .object({
          operationId: z.string().uuid(),
          advisorId: z.string().uuid(),
          advisorGivenName: z.string(),
          advisorFamilyName: z.string(),
          advisorEmail: z.string(),
          advisorPhone: z.string(),
          clientId: z.string().uuid(),
          clientGivenName: z.string(),
          clientFamilyName: z.string(),
          clientEmail: z.string(),
          clientPhone: z.string(),
          files: z.array(
            z.object({
              fileName: z.string().optional(),
              downloadUrl: z.string(),
              fileKey: z.string(),
              signatureFields: z
                .array(
                  z.object({
                    name: z.string().optional(),
                    signerIndex: z.number(),
                    x: z.number().optional(),
                    y: z.number().optional(),
                    page: z.number().optional(),
                  }),
                )
                .optional(),
              documentType: z.literal('pdf-for-presentation').optional(),
              metadata: z.record(z.string()).optional(),
            }),
          ),
          currentSignerId: z.string().uuid(),
          signatureId: z.string().uuid(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('OPERATION_SIGNATURE_UPDATED'),
      payload: z
        .object({
          currentSignerId: z.string().uuid(),
          signatureId: z.string().uuid(),

          operationId: z.string().uuid(),
          status: z.enum([
            'ready',
            'expired',
            'completed',
            'canceled',
            'failed',
            'pending',
          ]),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('OPERATION_SAVED'),
      payload: z.object({
        operationId: z.string().uuid(),
        signatureType: z.enum(['ELECTRONIC', 'HAND_WRITTEN']),
      }),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('OPERATION_PROVIDER_VALIDATED'),
      payload: z
        .object({
          operationId: z.string().uuid(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('OPERATION_PROVIDER_INVALIDATED'),
      payload: z
        .object({
          operationId: z.string().uuid(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('OPERATION_VALIDATED'),
      payload: z
        .object({
          operationId: z.string().uuid(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
  z
    .object({
      eventType: z.literal('OPERATION_INVALIDATED'),
      payload: z
        .object({
          operationId: z.string().uuid(),
        })
        .strict(),
      ...commontEventSchemaProperties,
    })
    .strict(),
]);
