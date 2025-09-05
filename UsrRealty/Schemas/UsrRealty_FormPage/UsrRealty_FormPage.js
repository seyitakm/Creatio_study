define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "94f9b1b4-000f-4c3b-a745-650b3731e1bf",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_6e8bbv8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_6e8bbv8_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_4uf15cl_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_6e8bbv8",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebServiceMaxPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_yxp9hvq_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "tag-icon"
				},
				"parentName": "Button_6e8bbv8",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_zxn15xz_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "webhooks-integration-button-icon",
					"clicked": {
						"request": "crt.SaveRecordRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IDunique",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrID_iitbjmr",
					"labelPosition": "auto",
					"control": "$PDS_UsrID_iitbjmr",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_2gy5e2s",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_j09qfh4",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_j09qfh4"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_090ovwd",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_090ovwd"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_4b0pg05",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_4b0pg05",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_yrvf5gm",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_yrvf5gm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_870p20h",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_870p20h",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_9we2itp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9we2itp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comments",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_UsrComment_dmaamwm",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_dmaamwm",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_lslu397",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_lslu397",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_wqv2zej",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wqv2zej_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Country",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_k5hg857",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_k5hg857",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_x2atypi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_x2atypi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_4bady74",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_4bady74",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_e5e7v6v",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_e5e7v6v_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_3a7ogxt",
					"labelPosition": "above",
					"control": "$PDS_UsrNumber_3a7ogxt",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_tr5snwd",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_tr5snwd_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_2udum3h",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_tr5snwd",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vsvg7a5",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_2udum3h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_h4izc7u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_h4izc7u_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"menuItems": [],
					"clickMode": "default",
					"visible": true
				},
				"parentName": "FlexContainer_vsvg7a5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_fgcwtkk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_fgcwtkk_caption)#"
				},
				"parentName": "GridDetailAddBtn_h4izc7u",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_hj2iyh9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_hj2iyh9_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_u7kij29DS"
						}
					}
				},
				"parentName": "FlexContainer_vsvg7a5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_lp4ilyc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_lp4ilyc_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_vsvg7a5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_r10v18i",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_r10v18i_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lp4ilyc",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_iuhf0o9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_iuhf0o9_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lp4ilyc",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_24ogqr9",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_24ogqr9_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_24ogqr9_GridDetail_u7kij29",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_u7kij29"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_24ogqr9_SearchValue",
							"GridDetailSearchFilter_24ogqr9_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_vsvg7a5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ixxcjhm",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_tr5snwd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_u7kij29",
					"activeRow": "$GridDetail_u7kij29_ActiveRow",
					"selectionState": "$GridDetail_u7kij29_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_u7kij29_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_u7kij29DS_Id",
					"columns": [
						{
							"id": "a70cc76a-17ff-781c-4e70-c6622b815a77",
							"code": "GridDetail_u7kij29DS_UsrComment",
							"caption": "#ResourceString(GridDetail_u7kij29DS_UsrComment)#",
							"dataValueType": 28,
							"width": 151.98843383789062
						},
						{
							"id": "ae6bb35e-bae4-ea31-dac0-367cd876a375",
							"code": "GridDetail_u7kij29DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_u7kij29DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 167.98843383789062
						},
						{
							"id": "e268cfb2-f827-4d4d-f2dd-50a4a8004f2e",
							"code": "GridDetail_u7kij29DS_UsrComment",
							"caption": "#ResourceString(GridDetail_u7kij29DS_UsrComment)#",
							"dataValueType": 28,
							"width": 121.98843383789062
						},
						{
							"id": "15a157c9-cf90-adf7-2fe5-071952b0ca54",
							"code": "GridDetail_u7kij29DS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_u7kij29DS_UsrParentRealty)#",
							"dataValueType": 10,
							"width": 150.98843383789062
						},
						{
							"id": "914440a4-089f-531b-d8a8-985f2826c33d",
							"code": "GridDetail_u7kij29DS_UsrManager",
							"caption": "#ResourceString(GridDetail_u7kij29DS_UsrManager)#",
							"dataValueType": 10,
							"width": 119.98843383789062
						},
						{
							"id": "c38ff4af-9e5c-2159-2992-ca7468a3bdf7",
							"code": "GridDetail_u7kij29DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_u7kij29DS_UsrPotentialCustomer)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_ixxcjhm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u7kij29_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Добавить тег",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_u7kij29DS",
							"filters": "$GridDetail_u7kij29 | crt.ToCollectionFilters : 'GridDetail_u7kij29' : $GridDetail_u7kij29_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_u7kij29_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u7kij29_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить тег",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_u7kij29DS",
							"filters": "$GridDetail_u7kij29 | crt.ToCollectionFilters : 'GridDetail_u7kij29' : $GridDetail_u7kij29_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_u7kij29_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_u7kij29_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u7kij29_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Экспорт в Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_u7kij29 | crt.ToCollectionFilters : 'GridDetail_u7kij29' : $GridDetail_u7kij29_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_u7kij29_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_u7kij29_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_u7kij29DS",
							"filters": "$GridDetail_u7kij29 | crt.ToCollectionFilters : 'GridDetail_u7kij29' : $GridDetail_u7kij29_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_u7kij29_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_j09qfh4": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn3_q7vcmsg": {
						"modelConfig": {
							"path": "PDS.UsrColumn3"
						}
					},
					"PDS_UsrArea_4mhmxnl": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						}
					},
					"PDS_UsrArea_090ovwd": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_yrvf5gm": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrComment_dmaamwm": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrID_iitbjmr": {
						"modelConfig": {
							"path": "PDS.UsrID"
						}
					},
					"PDS_UsrOfferType_870p20h": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrManager_q6odd9b": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_k5hg857": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_3a7ogxt": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_lslu397": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_4bady74": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_4b0pg05": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_u7kij29": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_u7kij29DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_24ogqr9_GridDetail_u7kij29",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_u7kij29DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_u7kij29DS.UsrComment"
									}
								},
								"GridDetail_u7kij29DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_u7kij29DS.UsrVisitDateTime"
									}
								},
								"GridDetail_u7kij29DS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_u7kij29DS.UsrParentRealty"
									}
								},
								"GridDetail_u7kij29DS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_u7kij29DS.UsrManager"
									}
								},
								"GridDetail_u7kij29DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_u7kij29DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_u7kij29DS_Id": {
									"modelConfig": {
										"path": "GridDetail_u7kij29DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_u7kij29DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_u7kij29DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
            request:  "usr.PushButtonRequest",
           handler: async (request, next) => {
                console.log("Button works ... ");
                                         Terrasoft.showInformation("My button was pressed.");
                                         var price = await request.$context.PDS_UsrPrice_j09qfh4;
                                         console.log("Price = " + price);
                                         request.$context.PDS_UsrArea_4mhmxnl = price * 0.2;
                                         /* Call the next handler if it exists and return its result. */
                                         return next?.handle(request);
              }
      },
      {
        request: "crt.HandleViewModelAttributeChangeRequest",
        handler: async(request, next)=>{
          if(request.attributeName === 'PDS_UsrPrice_j09qfh4' ||
            request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent'){
            var price = await request.$context.PDS_UsrPrice_j09qfh4;
            var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
            var commission = price * percent / 100;
            request.$context.PDS_UsrCommission_4b0pg05 = commission;
            }
          return next?.handle(request);
            }
        },
          {
            request: "usr.RunWebServiceButtonRequest",
            handler: async(request, next)=>{
              console.log("Run web service button works...");

              var typeObject = await request.$context.PDS_UsrType_yrvf5gm;
              var typeId = "";
              if(typeObject){
                typeId = typeObject.value;
              }

              var offerTypeObject = await request.$context.PDS_UsrOfferType_870p20h;
              var offerTypeId = "";
              if(offerTypeObject){
                offerTypeId = offerTypeObject.value;
              }

              const httpClientService = new sdk.HttpClientService();


              const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
              const transferName = "rest";
              const serviceName = "RealtyService";
              const methodName = "GetMaxPriceByTypeId";
              const enpdpoint = Terrasoft.combinePath(baseUrl, transferName, methodName);


              var  params = {
                realtyTypeId: typeId,
                realtyOfferTypeId: offerTypeId,
                
              };
              const response = await httpClientService.post(enpdpoint, params);

              console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
              return next?.handle(request);
            }
          }
      
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          "usr.DGValidator": {
            validator: function (config){
              return function (control){
                let value = control.value;
                let minValue = config.minValue;
                let valueCorrect = value >= minValue;
                var result;
                if(valueCorrect){
                  result = null;
                } else{
                  result = {
                    "usr.DGValidator":{
                      message: config.message
                    }
                  };
                }
                return result;
              };
            },
            params: [
              {
                name: "minValue"
              },
              {
                name: "message"
              }
            ],
            async: false
          }
        }/**SCHEMA_VALIDATORS*/
	};
});