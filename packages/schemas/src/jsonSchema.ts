/* eslint-disable max-lines */
export const jsonSchema = {
  type: 'object',
  oneOf: [
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'CONTRACT_CREATED',
        },
        payload: {
          type: 'object',
          properties: {
            contractId: {
              type: 'string',
              format: 'uuid',
            },
            network: {
              enum: [
                'HISTORICAL',
                'HUBN_UP',
                'REPRESENTATIVE_NETWORK',
                'AS_ASSOCIES',
              ],
            },
            representativeNetwork: {
              enum: [
                'PEGASE_GESTION_PRIVEE',
                'HELIX_FINANCE',
                'PAT_PATRIMOINE',
                'NEXUS',
                'EXPERT_PREVOYANCE',
                'LEGALFI_TRINITY',
                'HALIATUS_PATRIMOINE',
                'MAHR_ASSOCIATES',
                'MCB_FINANCE',
              ],
            },
            clientId: {
              type: 'string',
              format: 'uuid',
            },
            product: {
              enum: [
                'ARMADA_VIE',
                'ARMADA_CAPI',
                'ELITE_RETRAITE',
                'ARTHEMIS_VIE',
                'OTHER',
              ],
            },
          },
          required: ['clientId', 'contractId', 'product', 'network'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_DELETED',
        },
        payload: {
          type: 'object',
          properties: {
            subscriptionId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['subscriptionId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_UPDATED',
        },
        payload: {
          type: 'object',
          properties: {
            rawInvestmentAmount: {
              type: 'number',
            },
            scheduledPayments: {
              type: 'boolean',
            },
            entranceCostsPercentage: {
              type: 'number',
            },
            patrimonialGoal: {
              enum: [
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
              ],
            },
            subscriptionPeriodType: {
              enum: ['FIXED', 'LIFE'],
            },
            managementFeeRate: {
              enum: ['DEFAULT_RATE', 'DEROGATED_RATE'],
            },
            subscriptionClientLegalStatus: {
              enum: ['INDIVIDUAL', 'SELF_EMPLOYED'],
            },
            otherPatrimonialGoal: {
              type: ['string', 'null'],
            },
            subscriptionPeriod: {
              type: ['number', 'null'],
            },
            deductPaymentsInTaxes: {
              type: ['boolean', 'null'],
            },
            fiscalYearStartMonth: {
              enum: [
                'JANUARY',
                'FEBRUARY',
                'MARCH',
                'APRIL',
                'MAY',
                'JUNE',
                'JULY',
                'AUGUST',
                'SEPTEMBER',
                'OCTOBER',
                'NOVEMBER',
                'DECEMBER',
                null,
              ],
            },
            isContributionsPayerDifferentFromClient: {
              type: ['boolean', 'null'],
            },
            contributionPayerCompanyName: {
              type: ['string', 'null'],
            },
            contributionPayerCompanyRcsNumber: {
              type: ['string', 'null'],
            },
            contributionPayerCompanyAddress: {
              type: ['string', 'null'],
            },
            contributionPayerCompanyCity: {
              type: ['string', 'null'],
            },
            contributionPayerCompanyPostalCode: {
              type: ['string', 'null'],
            },
            contributionPayerCompanyCountry: {
              enum: [
                'FRANCE_METROPOLE',
                'FRANCE_GUYANA',
                'FRANCE_GUADELOUPE',
                'FRANCE_MAYOTTE',
                'FRANCE_MARTINIQUE',
                'FRANCE_REUNION',
                'SAINT_PIERRE_AND_MIQUELON',
                'SAINT_BARTHÉLEMY',
                'SAINT_MARTIN',
                'WALLIS_AND_FUTUNA',
                'FRENCH_POLYNESIA',
                'NEW_CALEDONIA',
                'AFGHANISTAN',
                'SOUTH_AFRICA',
                'OLAND_ISLANDS',
                'ALBANIA',
                'ALGERIA',
                'GERMANY',
                'ANDORRA',
                'ANGOLA',
                'ANGUILLA',
                'ANTARCTIC',
                'ANTIGUA_AND_BARBUDA',
                'SAUDI_ARABIA',
                'ARGENTINA',
                'ARMENIA',
                'ARUBA',
                'AUSTRALIA',
                'AUSTRIA',
                'AZERBAIJAN',
                'BAHAMAS',
                'BAHRAIN',
                'BANGLADESH',
                'BARBADOS',
                'BELORUS',
                'BELGIUM',
                'BELLE',
                'BENIGN',
                'BERMUDA',
                'BHUTAN',
                'BOLIVIA',
                'NETHERLANDS_CARIBBEAN',
                'BOSNIA_AND_HERZEGOVINA',
                'BOTSWANA',
                'ILE_BOUVET',
                'BRAZIL',
                'BRUNETTE',
                'BULGARIA',
                'BURKINA_FASO',
                'BURUNDI',
                'CAYMAN_ISLANDS',
                'CAMBODIA',
                'CAMEROON',
                'CANADA',
                'GREEN_CAP',
                'CENTRAL_AFRICAN_REPUBLIC',
                'CHILE',
                'CHINA',
                'CHRISTMAS_ISLAND',
                'CHREY',
                'ILE_COCOS',
                'COLOMBIA',
                'COMOROS',
                'REPUBLIC_OF_CONGO',
                'DEMOCRATIC_REPUBLIC_OF_CONGO',
                'COOK_ISLAND',
                'SOUTH_KOREA',
                'NORTH_KOREA',
                'COSTA_RICA',
                'IVORY_COAST',
                'CROATIA',
                'CUBA',
                'CURACAO',
                'DENMARK',
                'DJIBOUTI',
                'DOMINICAN_REPUBLIC',
                'DOMINICA',
                'EGYPT',
                'SALVADOR',
                'UNITED_ARAB_EMIRATES',
                'ECUADOR',
                'ERITREA',
                'SPAIN',
                'ESTONIA',
                'UNITED_STATES',
                'ETHIOPIA',
                'MALOUINES',
                'FAROE_ISLANDS',
                'FIDJI',
                'FINLAND',
                'GABON',
                'GAMBIA',
                'GEORGIA',
                'SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS',
                'GHANA',
                'GIBRALTAR',
                'GREECE',
                'GRENADE',
                'GREENLAND',
                'GUAM',
                'GUATEMALA',
                'GUERNSEY',
                'GUINEA',
                'GUINEA_BISSAU',
                'EQUATORIAL_GUINEA',
                'GUYANA',
                'HAITI',
                'HEARD_AND_MACDONALD_ISLANDS',
                'HONDURAS',
                'HONG_KONG',
                'HUNGARY',
                'ISLE_OF_MAN',
                'MINOR_REMOTE_MINOR_ISLANDS',
                'BRITISH_VIRGIN_ISLANDS',
                'VIRGIN_ISLANDS_OF_THE_UNITED_STATES',
                'INDIA',
                'INDONESIA',
                'IRAN',
                'IRAQ',
                'IRELAND',
                'ICELAND',
                'ISRAEL',
                'ITALY',
                'JAMAICA',
                'JAPAN',
                'JERSEY',
                'JORDAN',
                'KAZAKHSTAN',
                'KENYA',
                'KYRGYZSTAN',
                'KIRIBATI',
                'KUWAIT',
                'LAOS',
                'LESOTHO',
                'LATVIA',
                'LEBANON',
                'LIBERIA',
                'LIBYA',
                'LICHTENSTEIN',
                'LITHUANIA',
                'LUXEMBOURG',
                'MACAO',
                'MACEDONIA',
                'MADAGASCAR',
                'MALAYSIA',
                'MALAWI',
                'MALDIVES',
                'MALI',
                'MALTA',
                'NORTHERN_MARIANA_ISLANDS',
                'MOROCCO',
                'MARSHALL_ISLANDS',
                'MAURITIUS',
                'MAURITANIA',
                'MEXICO',
                'MICRONESIA',
                'MOLDOVA',
                'MONACO',
                'MONGOLIA',
                'MONTENEGRO',
                'MONTSERRAT',
                'MOZAMBIQUE',
                'BURMA',
                'NAMIBIA',
                'NAURU',
                'NEPAL',
                'NICARAGUA',
                'NIGER',
                'NIGERIA',
                'NIOUE',
                'ILE_NORFOLK',
                'NORWAY',
                'NEW_ZEALAND',
                'BRITISH_TERRITORY_OF_THE_INDIAN_OCEAN',
                'OMAN',
                'UGANDA',
                'UZBEKISTAN',
                'PAKISTAN',
                'PALAOS',
                'PALESTINE',
                'PANAMA',
                'PAPUA_NEW_GUINEA',
                'PARAGUAY',
                'NETHERLANDS',
                'PERU',
                'PHILIPPINES',
                'PITCAIRN_ISLANDS',
                'POLAND',
                'PORTO_RICO',
                'PORTUGAL',
                'QATAR',
                'ROMANIA',
                'UK',
                'RUSSIA',
                'RWANDA',
                'ARAB_REPUBLIC_SAHRAWI_DEMOCRATIC',
                'SAINTE_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA',
                'ST_LUCIA',
                'SAINT_CHRISTOPHE_AND_NEVÈS',
                'SAN_MARINO',
                'SINT_MAARTEN',
                'HOLY_SEE',
                'SAINT_VINCENT_AND_GRENADINES',
                'SOLOMON',
                'SAMOA',
                'AMERICAN_SAMOA',
                'SAO_TOME_AND_PRINCIPE',
                'SENEGAL',
                'SERBIA',
                'SEYCHELLES',
                'SIERRA_LEONE',
                'SINGAPORE',
                'SOLVAKIA',
                'SLOVENIA',
                'SOMALIA',
                'SUDAN',
                'SOUTH_SUDAN',
                'SRI_LANKA',
                'SWEDEN',
                'SWISS',
                'SURINAME',
                'SVALBARD_AND_JAN_MAYEN_ISLAND',
                'SWAZILAND',
                'SYRIA',
                'TAJIKISTAN',
                'TAÏWAN',
                'TANZANIA',
                'CHAD',
                'CZECH_REPUBLIC',
                'FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS',
                'THAILAND',
                'EAST_TIMOR',
                'TOGO',
                'TOKELAU',
                'TONGA',
                'TRINITY_AND_TOBAGO',
                'TUNISIA',
                'TURKMENISTAN',
                'TURKISH_AND_CAICOS_ISLANDS',
                'TURKEY',
                'TUVALU',
                'UKRAINE',
                'URUGUAY',
                'VANUATU',
                'VENEZUELA',
                'VIETNAM',
                'YEMEN',
                'ZAMBIA',
                'ZIMBABWE',
                'OTHER',
                null,
              ],
            },
            contributionPayerCompanyRepresentative: {
              type: ['string', 'null'],
            },
            scheduledPaymentsPeriodicity: {
              enum: ['MONTHLY', 'QUARTERLY', 'HALF_YEARLY', 'YEARLY'],
            },
            scheduledPaymentsRawAmount: {
              type: 'number',
            },
            scheduledPaymentsCostPercentage: {
              type: 'number',
            },
            scheduledPaymentsFirstPaymentDate: {
              type: 'string',
            },
            yearlyScheduledPaymentsAdjustment: {
              type: 'boolean',
            },
            ibanInitialPayment: {
              type: ['string', 'null'],
            },
            bicInitialPayment: {
              type: ['string', 'null'],
            },
            ribInitialPayment: {
              type: ['object', 'null'],
              oneOf: [
                {
                  type: 'object',
                  properties: {
                    updatedAt: {
                      type: 'string',
                      format: 'date-time',
                    },
                    fileKey: {
                      type: 'string',
                    },
                  },
                  required: ['updatedAt', 'fileKey'],
                  additionalProperties: false,
                },
                {
                  type: 'null',
                },
              ],
            },
            differentRibForScheduledAndInitialPayment: {
              type: 'boolean',
            },
            ibanScheduledPayments: {
              type: ['string', 'null'],
            },
            bicScheduledPayments: {
              type: ['string', 'null'],
            },
            ribScheduledPayments: {
              type: ['object', 'null'],
              oneOf: [
                {
                  type: 'object',
                  properties: {
                    updatedAt: {
                      type: 'string',
                      format: 'date-time',
                    },
                    fileKey: {
                      type: 'string',
                    },
                  },
                  required: ['updatedAt', 'fileKey'],
                  additionalProperties: false,
                },
                {
                  type: 'null',
                },
              ],
            },
            adviceReportProof: {
              type: 'object',
              properties: {
                updatedAt: {
                  type: 'string',
                  format: 'date-time',
                },
                fileKey: {
                  type: 'string',
                },
              },
              required: ['updatedAt', 'fileKey'],
              additionalProperties: false,
            },
            fundsOriginProof: {
              type: 'object',
              properties: {
                updatedAt: {
                  type: 'string',
                  format: 'date-time',
                },
                fileKey: {
                  type: 'string',
                },
              },
              required: ['updatedAt', 'fileKey'],
              additionalProperties: false,
            },
            freeClauseProof: {
              type: 'object',
              properties: {
                updatedAt: {
                  type: 'string',
                  format: 'date-time',
                },
                fileKey: {
                  type: 'string',
                },
              },
              required: ['updatedAt', 'fileKey'],
              additionalProperties: false,
            },
            managementOptionDocument: {
              type: 'object',
              properties: {
                updatedAt: {
                  type: 'string',
                  format: 'date-time',
                },
                fileKey: {
                  type: 'string',
                },
              },
              required: ['updatedAt', 'fileKey'],
              additionalProperties: false,
            },
            optionalDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  updatedAt: {
                    type: 'string',
                    format: 'date-time',
                  },
                  fileKey: {
                    type: 'string',
                  },
                  label: {
                    type: 'string',
                  },
                },
                required: ['updatedAt', 'fileKey', 'label'],
                additionalProperties: false,
              },
            },
            paymentMode: {
              enum: ['DIRECT_DEBIT', 'TRANSFER', 'CHEQUE'],
            },
            doesntAttachPaymentOrder: {
              type: ['boolean', 'null'],
            },
            paymentOrderDocument: {
              type: ['object', 'null'],
              oneOf: [
                {
                  type: 'object',
                  properties: {
                    updatedAt: {
                      type: 'string',
                      format: 'date-time',
                    },
                    fileKey: {
                      type: 'string',
                    },
                  },
                  required: ['updatedAt', 'fileKey'],
                  additionalProperties: false,
                },
                {
                  type: 'null',
                },
              ],
            },
            initialPaymentAllocation: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  isinCode: {
                    type: 'string',
                  },
                  name: {
                    type: 'string',
                  },
                  complexProduct: {
                    type: 'boolean',
                  },
                  needsSignedAnnex: {
                    type: 'boolean',
                  },
                  portfolioAllocationInPercent: {
                    type: 'number',
                    minimum: 0,
                    maximum: 100,
                  },
                  managementFirm: {
                    type: 'string',
                  },
                  supportType: {
                    type: 'string',
                  },
                  supportCategoryLabel: {
                    type: 'string',
                  },
                },
                required: [
                  'isinCode',
                  'name',
                  'supportCategoryLabel',
                  'supportType',
                  'managementFirm',
                  'complexProduct',
                  'needsSignedAnnex',
                  'portfolioAllocationInPercent',
                ],
                additionalProperties: false,
              },
            },
            managementMode: {
              enum: ['FREE', 'UNDER_MANDATE', 'COMBINED'],
            },
            sourceOfFunding: {
              enum: [
                'INHERITANCE',
                'TRANSFER_OF_PROPERTY',
                'SALE_OF_REAL_ESTATE_ASSETS',
                'ALREADY_BUILT_SAVINGS',
                'PROFESSIONAL_ACTIVITY_CAPITAL',
                'WIN_AT_GAMES',
                'COMPENSATION',
                'CREDIT',
              ],
            },
            freeManagementPercentage: {
              type: ['number', 'null'],
            },
            discretionaryManagementPercentage: {
              type: ['number', 'null'],
            },
            mandateName: {
              enum: [
                'CONVICTION_TERRITOIRES',
                'CONVICTION_INFRASTRUCTURES',
                'CONVICTION_INTELLIGENCE_ARTIFICIELLE',
                'GENERATION_BAS_CARBONE',
                'FIDELITY_TARGET',
                null,
              ],
            },
            scheduledPaymentsManagementMode: {
              enum: ['FREE', 'UNDER_MANDATE'],
            },
            scheduledPaymentsAllocation: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  isinCode: {
                    type: 'string',
                  },
                  name: {
                    type: 'string',
                  },
                  complexProduct: {
                    type: 'boolean',
                  },
                  needsSignedAnnex: {
                    type: 'boolean',
                  },
                  portfolioAllocationInPercent: {
                    type: 'number',
                    minimum: 0,
                    maximum: 100,
                  },
                  managementFirm: {
                    type: 'string',
                  },
                  supportType: {
                    type: 'string',
                  },
                  supportCategoryLabel: {
                    type: 'string',
                  },
                },
                required: [
                  'isinCode',
                  'name',
                  'supportCategoryLabel',
                  'supportType',
                  'managementFirm',
                  'complexProduct',
                  'needsSignedAnnex',
                  'portfolioAllocationInPercent',
                ],
                additionalProperties: false,
              },
            },
            hasManagementOption: {
              type: 'boolean',
            },
            managementOption: {
              enum: [
                'PROGRESSIVE_INVESTMENT',
                'CAPITAL_GAINS_REVITALIZATION',
                'AUTOMATIC_REBALANCING',
                'STOP_LOSS',
                'STOP_LOSS_AND_CAPITAL_GAINS_SECURING',
                'CAPITAL_GAINS_SECURING',
                null,
              ],
            },
            progressiveInvestmentTotalAmount: {
              type: ['number', 'null'],
            },
            progressiveInvestmentPeriodicity: {
              enum: ['MONTHLY', 'QUARTERLY', 'HALF_YEARLY', 'YEARLY', null],
            },
            progressiveInvestmentArbitragesNumber: {
              type: ['number', 'null'],
            },
            progressiveInvestmentFirstArbitrageDate: {
              type: ['string', 'null'],
            },
            progressiveInvestmentInitialSupports: {
              oneOf: [
                {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      isinCode: {
                        type: 'string',
                      },
                      name: {
                        type: 'string',
                      },
                      amountToDisinvest: {
                        type: 'number',
                      },
                    },
                    required: ['isinCode', 'name', 'amountToDisinvest'],
                    additionalProperties: false,
                  },
                },
                {
                  type: 'null',
                },
              ],
            },
            progressiveInvestmentTargetSupports: {
              oneOf: [
                {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      isinCode: {
                        type: 'string',
                      },
                      name: {
                        type: 'string',
                      },
                      percentage: {
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                      },
                    },
                    required: ['isinCode', 'name', 'percentage'],
                    additionalProperties: false,
                  },
                },
                {
                  type: 'null',
                },
              ],
            },
            clauseType: {
              enum: ['GENERAL', 'FREE'],
            },
            freeClauseInfoMode: {
              enum: ['ANNEX', 'TEXT', null],
            },
            freeClauseText: {
              type: ['string', 'null'],
            },
            additionalDeathGuarantee: {
              type: 'boolean',
            },
            additionalAccidentalDeathguarantee: {
              type: 'boolean',
            },
            mortalityOption: {
              type: 'boolean',
            },
            exonerateScheduledPaymentOption: {
              type: 'boolean',
            },
            clientHasSeenPrecontractDocs: {
              type: 'boolean',
            },
            clientHasApprovedSummary: {
              type: 'boolean',
            },
            currentPage: {
              enum: [
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
              ],
            },
          },
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'INITIAL_ALLOCATION_VALIDATION_REQUESTED',
        },
        payload: {
          type: 'object',
          properties: {
            subscriptionId: {
              type: 'string',
              format: 'uuid',
            },
            aptimumAnalysisId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['subscriptionId', 'aptimumAnalysisId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'INITIAL_ALLOCATION_VALIDATION_RECEIVED',
        },
        payload: {
          type: 'object',
          properties: {
            aptimumAnalysisId: {
              type: 'string',
            },
            valuationDate: {
              type: 'string',
            },
            volatility: {
              type: 'number',
            },
            priips: {
              type: 'number',
            },
            quality: {
              type: 'object',
              properties: {
                good: {
                  type: 'number',
                },
                bad: {
                  type: 'number',
                },
                notRated: {
                  type: 'number',
                },
              },
              required: ['good', 'bad', 'notRated'],
            },
            ratedQuality: {
              type: 'object',
              properties: {
                good: {
                  type: 'number',
                },
                bad: {
                  type: 'number',
                },
              },
              required: ['good', 'bad'],
            },
            priipsPerSupport: {
              type: 'object',
              additionalProperties: {
                type: 'number',
              },
            },
          },
          required: [
            'aptimumAnalysisId',
            'valuationDate',
            'volatility',
            'priips',
            'quality',
            'ratedQuality',
            'priipsPerSupport',
          ],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'COMPLEX_PRODUCT_QUIZZ_COMPLETED',
        },
        payload: {
          type: 'object',
          properties: {
            idQuizz: {
              type: 'string',
            },
            supportIsin: {
              type: 'string',
            },
          },
          required: ['idQuizz', 'supportIsin'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_SIGNATURE_UPDATED',
        },
        payload: {
          type: 'object',
          properties: {
            currentSignerId: {
              type: 'string',
              format: 'uuid',
            },
            signatureId: {
              type: 'string',
              format: 'uuid',
            },
            contractId: {
              type: 'string',
              format: 'uuid',
            },
            status: {
              enum: [
                'ready',
                'expired',
                'completed',
                'canceled',
                'failed',
                'pending',
              ],
            },
          },
          required: ['currentSignerId', 'signatureId', 'contractId', 'status'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_SAVED',
        },
        payload: {
          type: 'object',
          properties: {
            subscriptionId: {
              type: 'string',
              format: 'uuid',
            },
            signatureType: {
              enum: ['ELECTRONIC', 'HAND_WRITTEN'],
            },
            suravenirContractId: {
              type: 'string',
            },
          },
          required: ['subscriptionId'],
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_VALIDATED',
        },
        payload: {
          type: 'object',
          properties: {
            subscriptionId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['subscriptionId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_INVALIDATED',
        },
        payload: {
          type: 'object',
          properties: {
            subscriptionId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['subscriptionId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_PROVIDER_VALIDATED',
        },
        payload: {
          type: 'object',
          properties: {
            subscriptionId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['subscriptionId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_PROVIDER_INVALIDATED',
        },
        payload: {
          type: 'object',
          properties: {
            subscriptionId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['subscriptionId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'SUBSCRIPTION_SIGNATURES_REQUESTED',
        },
        payload: {
          type: 'object',
          properties: {
            subscriptionId: {
              type: 'string',
              format: 'uuid',
            },
            advisorId: {
              type: 'string',
              format: 'uuid',
            },
            advisorGivenName: {
              type: 'string',
            },
            advisorFamilyName: {
              type: 'string',
            },
            advisorEmail: {
              type: 'string',
            },
            advisorPhone: {
              type: 'string',
            },
            clientId: {
              type: 'string',
              format: 'uuid',
            },
            clientGivenName: {
              type: 'string',
            },
            clientFamilyName: {
              type: 'string',
            },
            clientEmail: {
              type: 'string',
            },
            clientPhone: {
              type: 'string',
            },
            files: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  fileName: {
                    type: 'string',
                  },
                  downloadUrl: {
                    type: 'string',
                  },
                  fileKey: {
                    type: 'string',
                  },
                  signatureFields: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                        },
                        signerIndex: {
                          type: 'number',
                        },
                        x: {
                          type: 'number',
                        },
                        y: {
                          type: 'number',
                        },
                        page: {
                          type: 'number',
                        },
                      },
                      required: ['signerIndex'],
                    },
                  },
                  documentType: {
                    const: 'pdf-for-presentation',
                  },
                  metadata: {
                    type: 'object',
                  },
                },
                required: ['downloadUrl', 'fileKey'],
              },
            },
            currentSignerId: {
              type: 'string',
              format: 'uuid',
            },
            signatureId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: [
            'subscriptionId',
            'advisorId',
            'advisorGivenName',
            'advisorFamilyName',
            'advisorEmail',
            'advisorPhone',
            'clientId',
            'clientGivenName',
            'clientFamilyName',
            'clientEmail',
            'clientPhone',
            'files',
            'currentSignerId',
            'signatureId',
          ],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'OPERATION_STARTED',
        },
        payload: {
          type: 'object',
          properties: {
            contractId: {
              type: 'string',
              format: 'uuid',
            },
            fpFinanceContractId: {
              type: 'number',
            },
            operationId: {
              type: 'string',
              format: 'uuid',
            },
            operationType: {
              type: 'string',
              enum: ['ARBITRAGE', 'PAYMENT'],
            },
            creationDate: {
              type: 'string',
            },
            clientId: {
              type: 'string',
              format: 'uuid',
            },
            product: {
              type: 'string',
              enum: [
                'ARMADA_VIE',
                'ARMADA_CAPI',
                'ELITE_RETRAITE',
                'ARTHEMIS_VIE',
                'OTHER',
              ],
            },
            providerContractId: {
              type: 'string',
            },
            fpFinanceProduct: {
              type: 'string',
            },
            network: {
              type: 'string',
              enum: [
                'HISTORICAL',
                'HUBN_UP',
                'REPRESENTATIVE_NETWORK',
                'AS_ASSOCIES',
              ],
            },
            representativeNetwork: {
              type: 'string',
              enum: [
                'PEGASE_GESTION_PRIVEE',
                'HELIX_FINANCE',
                'PAT_PATRIMOINE',
                'NEXUS',
                'EXPERT_PREVOYANCE',
                'LEGALFI_TRINITY',
                'HALIATUS_PATRIMOINE',
                'MAHR_ASSOCIATES',
                'MCB_FINANCE',
              ],
            },
            adviceReportFpDocumentId: {
              type: 'number',
            },
            operationSlipFpDocumentId: {
              type: 'number',
            },
            movements: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  providerContractId: {
                    type: 'string',
                  },
                  fpFinanceSupportId: {
                    type: 'number',
                  },
                  isinCode: {
                    type: 'string',
                  },
                  finalSituation: {
                    type: 'number',
                  },
                  initialSituation: {
                    type: 'number',
                  },
                  delta: {
                    type: 'number',
                  },
                  isMandate: {
                    type: 'boolean',
                  },
                  complexProductQuizzId: {
                    type: 'string',
                  },
                },
                required: [
                  'providerContractId',
                  'fpFinanceSupportId',
                  'isinCode',
                  'finalSituation',
                  'initialSituation',
                  'delta',
                  'isMandate',
                ],
                additionalProperties: false,
              },
            },
            payment: {
              type: 'object',
              properties: {
                providerContractId: {
                  type: 'string',
                },
                fpFinanceContractId: {
                  type: 'number',
                },
                amount: {
                  type: 'number',
                },
                feePercentage: {
                  type: 'number',
                },
                fundOrigin: {
                  enum: [
                    'INHERITANCE',
                    'TRANSFER_OF_PROPERTY',
                    'SALE_OF_REAL_ESTATE_ASSETS',
                    'ALREADY_BUILT_SAVINGS',
                    'PROFESSIONAL_ACTIVITY_CAPITAL',
                    'WIN_AT_GAMES',
                    'COMPENSATION',
                    'CREDIT',
                  ],
                },
                paymentMode: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        type: {
                          const: 'DIRECT_DEBIT',
                        },
                        iban: {
                          type: 'string',
                        },
                        bic: {
                          type: 'string',
                        },
                        ribFileKey: {
                          type: 'string',
                        },
                      },
                      required: ['type', 'iban', 'bic', 'ribFileKey'],
                      additionalProperties: false,
                    },
                    {
                      type: 'object',
                      properties: {
                        type: {
                          const: 'CHEQUE',
                        },
                        chequeNumber: {
                          type: 'number',
                        },
                      },
                      required: ['type', 'chequeNumber'],
                      additionalProperties: false,
                    },
                  ],
                },
                isScheduled: {
                  type: 'boolean',
                },
                scheduledPayment: {
                  type: 'object',
                  properties: {
                    operationType: {
                      enum: ['SETUP', 'MODIFICATION', 'DELETION'],
                    },
                    frequency: {
                      enum: ['MONTHLY', 'QUARTERLY', 'HALF_YEARLY', 'YEARLY'],
                    },
                    yearlyScheduledPaymentsAdjustment: {
                      type: 'boolean',
                    },
                    firstPaymentDate: {
                      type: 'string',
                    },
                  },
                  required: [
                    'operationType',
                    'frequency',
                    'yearlyScheduledPaymentsAdjustment',
                    'firstPaymentDate',
                  ],
                  additionalProperties: false,
                },
                fundOriginDocumentFileKey: {
                  type: 'string',
                },
              },
              required: [
                'providerContractId',
                'fpFinanceContractId',
                'amount',
                'feePercentage',
                'paymentMode',
                'fundOrigin',
                'isScheduled',
              ],
              additionalProperties: false,
            },
            arbitrage: {
              type: 'object',
              properties: {
                feePercentage: {
                  type: 'number',
                },
              },
              required: ['feePercentage'],
              additionalProperties: false,
            },
          },
          required: [
            'contractId',
            'fpFinanceContractId',
            'operationId',
            'operationType',
            'creationDate',
            'clientId',
            'adviceReportFpDocumentId',
            'operationSlipFpDocumentId',
            'movements',
            'providerContractId',
          ],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'OPERATION_SIGNATURE_REQUESTED',
        },
        payload: {
          type: 'object',
          properties: {
            contractId: {
              type: 'string',
              format: 'uuid',
            },
            operationId: {
              type: 'string',
              format: 'uuid',
            },
            advisorId: {
              type: 'string',
              format: 'uuid',
            },
            advisorGivenName: {
              type: 'string',
            },
            advisorFamilyName: {
              type: 'string',
            },
            advisorEmail: {
              type: 'string',
            },
            advisorPhone: {
              type: 'string',
            },
            clientId: {
              type: 'string',
              format: 'uuid',
            },
            clientGivenName: {
              type: 'string',
            },
            clientFamilyName: {
              type: 'string',
            },
            clientEmail: {
              type: 'string',
            },
            clientPhone: {
              type: 'string',
            },
            files: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  fileName: {
                    type: 'string',
                  },
                  downloadUrl: {
                    type: 'string',
                  },
                  fileKey: {
                    type: 'string',
                  },
                  signatureFields: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                        },
                        signerIndex: {
                          type: 'number',
                        },
                        x: {
                          type: 'number',
                        },
                        y: {
                          type: 'number',
                        },
                        page: {
                          type: 'number',
                        },
                      },
                      required: ['signerIndex'],
                    },
                  },
                  documentType: {
                    const: 'pdf-for-presentation',
                  },
                  metadata: {
                    type: 'object',
                  },
                },
                required: ['downloadUrl', 'fileKey'],
              },
            },
            currentSignerId: {
              type: 'string',
              format: 'uuid',
            },
            signatureId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: [
            'contractId',
            'operationId',
            'advisorId',
            'advisorGivenName',
            'advisorFamilyName',
            'advisorEmail',
            'advisorPhone',
            'clientId',
            'clientGivenName',
            'clientFamilyName',
            'clientEmail',
            'clientPhone',
            'files',
            'currentSignerId',
            'signatureId',
          ],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'OPERATION_SIGNATURE_UPDATED',
        },
        payload: {
          type: 'object',
          properties: {
            currentSignerId: {
              type: 'string',
              format: 'uuid',
            },
            signatureId: {
              type: 'string',
              format: 'uuid',
            },
            contractId: {
              type: 'string',
              format: 'uuid',
            },
            operationId: {
              type: 'string',
              format: 'uuid',
            },
            status: {
              enum: [
                'ready',
                'expired',
                'completed',
                'canceled',
                'failed',
                'pending',
              ],
            },
          },
          required: [
            'currentSignerId',
            'signatureId',
            'contractId',
            'operationId',
            'status',
          ],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'OPERATION_SAVED',
        },
        payload: {
          type: 'object',
          properties: {
            contractId: {
              type: 'string',
              format: 'uuid',
            },
            operationId: {
              type: 'string',
              format: 'uuid',
            },
            signatureType: {
              enum: ['ELECTRONIC', 'HAND_WRITTEN'],
            },
          },
          required: ['contractId', 'operationId', 'signatureType'],
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'OPERATION_PROVIDER_VALIDATED',
        },
        payload: {
          type: 'object',
          properties: {
            operationId: {
              type: 'string',
              format: 'uuid',
            },
            contractId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['operationId', 'contractId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'OPERATION_PROVIDER_INVALIDATED',
        },
        payload: {
          type: 'object',
          properties: {
            operationId: {
              type: 'string',
              format: 'uuid',
            },
            contractId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['operationId', 'contractId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'OPERATION_VALIDATED',
        },
        payload: {
          type: 'object',
          properties: {
            operationId: {
              type: 'string',
              format: 'uuid',
            },
            contractId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['operationId', 'contractId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        contractId: {
          type: 'string',
          format: 'uuid',
        },
        eventType: {
          const: 'OPERATION_INVALIDATED',
        },
        payload: {
          type: 'object',
          properties: {
            operationId: {
              type: 'string',
              format: 'uuid',
            },
            contractId: {
              type: 'string',
              format: 'uuid',
            },
          },
          required: ['operationId', 'contractId'],
          additionalProperties: false,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdByType: {
          type: 'string',
          enum: ['CognitoUser', 'CanopiaBackend', 'ExternalPartner'],
        },
        createdBy: {
          type: 'string',
        },
        version: {
          type: 'number',
        },
        GSI1_PK: {
          type: 'string',
        },
        GSI1_SK: {
          type: 'string',
        },
      },
      required: [
        'contractId',
        'eventType',
        'payload',
        'createdAt',
        'createdByType',
        'createdBy',
        'version',
      ],
      additionalProperties: false,
    },
  ],
} as const;
