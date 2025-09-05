namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("070c2e53-b628-42cf-b1c9-bfbfd385dbbf");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("dd640fc2-6086-44f9-8262-fd4b406d73d7");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,7,242,31,6,209,131,4,102,105,175,77,27,168,141,91,2,161,45,177,146,75,233,97,189,26,43,219,238,135,216,89,57,117,75,254,123,103,181,114,237,200,41,100,46,210,206,188,121,51,239,49,78,90,164,78,42,132,26,67,144,228,55,81,44,188,219,232,182,15,50,106,239,206,207,254,156,159,1,71,79,218,181,176,218,81,68,123,113,156,58,110,180,214,187,255,22,3,138,165,139,58,106,164,151,96,196,114,139,46,238,161,223,134,244,110,200,93,107,94,194,97,40,87,234,30,173,252,204,26,224,61,20,183,20,110,80,154,184,43,170,239,185,169,235,215,70,43,80,70,18,65,174,61,67,3,111,97,46,9,159,169,100,150,209,128,35,66,191,229,149,117,131,176,245,186,129,47,110,37,183,44,164,244,235,31,168,34,16,186,6,195,12,50,225,28,55,172,106,160,253,16,90,2,172,14,116,71,204,41,214,188,133,248,199,182,167,193,234,226,41,44,243,66,24,244,176,240,50,39,170,220,48,1,55,168,180,149,6,186,160,85,114,41,119,137,79,24,235,93,135,205,194,155,222,186,59,105,122,124,55,66,47,203,228,228,215,132,47,166,163,245,166,204,68,151,240,230,117,138,234,105,125,34,40,5,138,43,90,72,167,208,96,195,243,99,232,145,73,79,113,20,67,58,6,62,71,146,45,214,104,59,35,99,218,216,225,3,92,123,37,141,254,45,215,6,87,3,174,28,117,220,18,6,190,87,199,190,243,177,138,27,36,223,7,197,32,31,152,101,118,58,38,197,225,82,242,137,21,51,40,78,38,144,24,92,185,162,218,251,185,110,243,171,168,68,237,199,13,170,23,200,224,245,115,66,124,244,193,202,88,78,228,241,96,246,241,231,171,19,163,83,196,251,224,31,6,249,203,95,10,187,36,112,223,63,133,63,30,158,227,47,127,30,255,2,88,113,226,61,221,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("d9cb6868-a419-6819-8d5d-488ce53d1b33"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("dd640fc2-6086-44f9-8262-fd4b406d73d7"),
				CreatedInSchemaUId = new Guid("070c2e53-b628-42cf-b1c9-bfbfd385dbbf"),
				ModifiedInSchemaUId = new Guid("070c2e53-b628-42cf-b1c9-bfbfd385dbbf")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("070c2e53-b628-42cf-b1c9-bfbfd385dbbf"));
		}

		#endregion

	}

	#endregion

}

