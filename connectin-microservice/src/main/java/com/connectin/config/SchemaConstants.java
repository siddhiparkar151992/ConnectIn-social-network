package com.connectin.config;


import java.util.HashMap;
import java.util.Locale;

public class SchemaConstants {

	

	/**
	 * Languages iso codes
	 * 
	 */
	public static final String[] LANGUAGE_ISO_CODE = {"en", "fr"};
	
	/**
	 * All regions
	 */
	public static final String ALL_REGIONS = "*";

	/**
	 * Country iso codes
	 */
	public static final String[] COUNTRY_ISO_CODE = { "AF","AX","AL","DZ",
		"AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH",
		"BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","BR","IO",
		"BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX",
		"CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CY","CZ","DK","DJ",
		"DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR",
		"GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU",
		"GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID",
		"IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP",
		"KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK",
		"MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD",
		"MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NZ",
		"NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY",
		"PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","SH","KN","LC",
		"PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SK","SI","SB",
		"SO","ZA","GS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ",
		"TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA",
		"AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH",
	    "YE","ZM","ZW" };

	
	
	/**
	 * Currency codes with name
	 */
	public static final HashMap<String, String> COUNTRY_MAP = new HashMap<String, String>();
	
	static {
		COUNTRY_MAP.put("AFN", "Afghani");
		COUNTRY_MAP.put("EUR", "Euro");
		COUNTRY_MAP.put("ALL", "Lek");
		COUNTRY_MAP.put("DZD", "Algerian Dinar");
		COUNTRY_MAP.put("USD", "US Dollar");
		COUNTRY_MAP.put("AOA", "Kwanza");
		COUNTRY_MAP.put("XCD", "East Caribbean Dollar");
		COUNTRY_MAP.put("ARS", "Argentine Peso");
		COUNTRY_MAP.put("AMD", "Armenian Dram");
		COUNTRY_MAP.put("AWG", "Aruban Florin");
		COUNTRY_MAP.put("AUD", "Australian Dollar");
		COUNTRY_MAP.put("AZN", "Azerbaijanian Manat");
		COUNTRY_MAP.put("BSD", "Bahamian Dollar");
		COUNTRY_MAP.put("BHD", "Bahraini Dinar");
		COUNTRY_MAP.put("BDT", "Taka");
		COUNTRY_MAP.put("BBD", "Barbados Dollar");
		COUNTRY_MAP.put("BYR", "Belarussian Ruble");
		COUNTRY_MAP.put("BZD", "Belize Dollar");
		COUNTRY_MAP.put("XOF", "CFA Franc BCEAO");
		COUNTRY_MAP.put("BMD", "Bermudian Dollar");
		COUNTRY_MAP.put("BTN", "Ngultrum");
		COUNTRY_MAP.put("INR", "Indian Rupee");
		COUNTRY_MAP.put("BOB", "Boliviano");
		COUNTRY_MAP.put("BOV", "Mvdol");
		COUNTRY_MAP.put("BAM", "Convertible Mark");
		COUNTRY_MAP.put("BWP", "Pula");
		COUNTRY_MAP.put("NOK", "Norwegian Krone");
		COUNTRY_MAP.put("BRL", "Brazilian Real");
		COUNTRY_MAP.put("BND", "Brunei Dollar");
		COUNTRY_MAP.put("BGN", "Bulgarian Lev");
		COUNTRY_MAP.put("XOF", "CFA Franc BCEAO");
		COUNTRY_MAP.put("BIF", "Burundi Franc");
		COUNTRY_MAP.put("KHR", "Riel");
		COUNTRY_MAP.put("XAF", "CFA Franc BEAC");
		COUNTRY_MAP.put("CAD", "Canadian Dollar");
		COUNTRY_MAP.put("CVE", "Cape Verde Escudo");
		COUNTRY_MAP.put("KYD", "Cayman Islands Dollar");
		COUNTRY_MAP.put("CLF", "Unidades de fomento");
		COUNTRY_MAP.put("CLP", "Chilean Peso");
		COUNTRY_MAP.put("CNY", "Yuan Renminbi");
		COUNTRY_MAP.put("COP", "Colombian Peso");
		//COUNTRY_MAP.put("COU", "Unidad de Valor Real");
		COUNTRY_MAP.put("KMF", "Comoro Franc");
		COUNTRY_MAP.put("XAF", "CFA Franc BEAC");
		COUNTRY_MAP.put("CDF", "Congolese Franc");
		COUNTRY_MAP.put("NZD", "New Zealand Dollar");
		COUNTRY_MAP.put("CRC", "Costa Rican Colon");
		COUNTRY_MAP.put("XOF", "CFA Franc BCEAO");
		COUNTRY_MAP.put("HRK", "Croatian Kuna");
		//COUNTRY_MAP.put("CUC", "Peso Convertible");
		COUNTRY_MAP.put("CUP", "Cuban Peso");
		COUNTRY_MAP.put("ANG", "Netherlands Antillean Guilder");
		COUNTRY_MAP.put("CZK", "Czech Koruna");
		COUNTRY_MAP.put("DKK", "Danish Krone");
		COUNTRY_MAP.put("DJF", "Djibouti Franc");
		COUNTRY_MAP.put("XCD", "East Caribbean Dollar");
		COUNTRY_MAP.put("DOP", "Dominican Peso");
		COUNTRY_MAP.put("EGP", "Egyptian Pound");
		COUNTRY_MAP.put("SVC", "El Salvador Colon");
		COUNTRY_MAP.put("XAF", "CFA Franc BEAC");
		COUNTRY_MAP.put("ERN", "Nakfa");
		COUNTRY_MAP.put("ETB", "Ethiopian Birr");
		COUNTRY_MAP.put("FKP", "Falkland Islands Pound");
		COUNTRY_MAP.put("DKK", "Danish Krone");
		COUNTRY_MAP.put("FJD", "Fiji Dollar");
		COUNTRY_MAP.put("XPF", "CFP Franc");
		COUNTRY_MAP.put("XAF", "CFA Franc BEAC");
		COUNTRY_MAP.put("GMD", "Dalasi");
		COUNTRY_MAP.put("GEL", "Lari");
		COUNTRY_MAP.put("GHS", "Ghana Cedi");
		COUNTRY_MAP.put("GIP", "Gibraltar Pound");
		COUNTRY_MAP.put("DKK", "Danish Krone");
		COUNTRY_MAP.put("XCD", "East Caribbean Dollar");
		COUNTRY_MAP.put("GTQ", "Quetzal");
		COUNTRY_MAP.put("GBP", "Pound Sterling");
		COUNTRY_MAP.put("GNF", "Guinea Franc");
		COUNTRY_MAP.put("XOF", "CFA Franc BCEAO");
		COUNTRY_MAP.put("GYD", "Guyana Dollar");
		COUNTRY_MAP.put("HTG", "Gourde");
		COUNTRY_MAP.put("HNL", "Lempira");
		COUNTRY_MAP.put("HKD", "Hong Kong Dollar");
		COUNTRY_MAP.put("HUF", "Forint");
		COUNTRY_MAP.put("ISK", "Iceland Krona");
		COUNTRY_MAP.put("INR", "Indian Rupee");
		COUNTRY_MAP.put("IDR", "Rupiah");
		COUNTRY_MAP.put("XDR", "SDR (Special Drawing Right)");
		COUNTRY_MAP.put("IRR", "Iranian Rial");
		COUNTRY_MAP.put("IQD", "Iraqi Dinar");
		COUNTRY_MAP.put("GBP", "Pound Sterling");
		COUNTRY_MAP.put("ILS", "New Israeli Sheqel");
		COUNTRY_MAP.put("JMD", "Jamaican Dollar");
		COUNTRY_MAP.put("JPY", "Yen");
		COUNTRY_MAP.put("GBP", "Pound Sterling");
		COUNTRY_MAP.put("JOD", "Jordanian Dinar");
		COUNTRY_MAP.put("KZT", "Tenge");
		COUNTRY_MAP.put("KES", "Kenyan Shilling");
		COUNTRY_MAP.put("AUD", "Australian Dollar");
		COUNTRY_MAP.put("KPW", "North Korean Won");
		COUNTRY_MAP.put("KRW", "Won");
		COUNTRY_MAP.put("KWD", "Kuwaiti Dinar");
		COUNTRY_MAP.put("KGS", "Som");
		COUNTRY_MAP.put("LAK", "Kip");
		COUNTRY_MAP.put("LVL", "Latvian Lats");
		COUNTRY_MAP.put("LBP", "Lebanese Pound");
		COUNTRY_MAP.put("LSL", "Loti");
		COUNTRY_MAP.put("ZAR", "Rand");
		COUNTRY_MAP.put("LRD", "Liberian Dollar");
		COUNTRY_MAP.put("LYD", "Libyan Dinar");
		COUNTRY_MAP.put("CHF", "Swiss Franc");
		COUNTRY_MAP.put("LTL", "Lithuanian Litas");
		COUNTRY_MAP.put("EUR", "Euro");
		COUNTRY_MAP.put("MOP", "Pataca");
		COUNTRY_MAP.put("MKD", "Denar");
		COUNTRY_MAP.put("MGA", "Malagasy Ariary");
		COUNTRY_MAP.put("MWK", "Kwacha");
		COUNTRY_MAP.put("MYR", "Malaysian Ringgit");
		COUNTRY_MAP.put("MVR", "Rufiyaa");
		COUNTRY_MAP.put("XOF", "CFA Franc BCEAO");
		COUNTRY_MAP.put("MRO", "Ouguiya");
		COUNTRY_MAP.put("MUR", "Mauritius Rupee");
		//COUNTRY_MAP.put("XUA", "ADB Unit of Account");
		COUNTRY_MAP.put("MXN", "Mexican Peso");
		COUNTRY_MAP.put("MXV", "Mexican Unidad de Inversion (UDI)");
		COUNTRY_MAP.put("MDL", "Moldovan Leu");
		COUNTRY_MAP.put("MNT", "Tugrik");
		COUNTRY_MAP.put("XCD", "East Caribbean Dollar");
		COUNTRY_MAP.put("MAD", "Moroccan Dirham");
		COUNTRY_MAP.put("MZN", "Mozambique Metical");
		COUNTRY_MAP.put("MMK", "Kyat");
		COUNTRY_MAP.put("NAD", "Namibia Dollar");
		COUNTRY_MAP.put("ZAR", "Rand");
		COUNTRY_MAP.put("NPR", "Nepalese Rupee");
		COUNTRY_MAP.put("XPF", "CFP Franc");
		COUNTRY_MAP.put("NZD", "New Zealand Dollar");
		COUNTRY_MAP.put("NIO", "Cordoba Oro");
		COUNTRY_MAP.put("XOF", "CFA Franc BCEAO");
		COUNTRY_MAP.put("NGN", "Naira");
		COUNTRY_MAP.put("NZD", "New Zealand Dollar");
		COUNTRY_MAP.put("AUD", "Australian Dollar");
		COUNTRY_MAP.put("NOK", "Norwegian Krone");
		COUNTRY_MAP.put("OMR", "Rial Omani");
		COUNTRY_MAP.put("PKR", "Pakistan Rupee");
		COUNTRY_MAP.put("PAB", "Balboa");
		COUNTRY_MAP.put("PGK", "Kina");
		COUNTRY_MAP.put("PYG", "Guarani");
		COUNTRY_MAP.put("PEN", "Nuevo Sol");
		COUNTRY_MAP.put("PHP", "Philippine Peso");
		COUNTRY_MAP.put("NZD", "New Zealand Dollar");
		COUNTRY_MAP.put("PLN", "Zloty");
		COUNTRY_MAP.put("USD", "US Dollar");
		COUNTRY_MAP.put("QAR", "Qatari Rial");
		COUNTRY_MAP.put("RON", "New Romanian Leu");
		COUNTRY_MAP.put("RUB", "Russian Ruble");
		COUNTRY_MAP.put("RWF", "Rwanda Franc");
		COUNTRY_MAP.put("SHP", "Saint Helena Pound");
		COUNTRY_MAP.put("XCD", "East Caribbean Dollar");
		COUNTRY_MAP.put("WST", "Tala");
		COUNTRY_MAP.put("STD", "Dobra");
		COUNTRY_MAP.put("SAR", "Saudi Riyal");
		COUNTRY_MAP.put("XOF", "CFA Franc BCEAO");
		COUNTRY_MAP.put("RSD", "Serbian Dinar");
		COUNTRY_MAP.put("SCR", "Seychelles Rupee");
		COUNTRY_MAP.put("SLL", "Leone");
		COUNTRY_MAP.put("SGD", "Singapore Dollar");
		COUNTRY_MAP.put("ANG", "Netherlands Antillean Guilder");
		//COUNTRY_MAP.put("XSU", "Sucre");
		COUNTRY_MAP.put("SBD", "Solomon Islands Dollar");
		COUNTRY_MAP.put("SOS", "Somali Shilling");
		COUNTRY_MAP.put("ZAR", "Rand");
		//COUNTRY_MAP.put("SSP", "South Sudanese Pound");
		COUNTRY_MAP.put("LKR", "Sri Lanka Rupee");
		COUNTRY_MAP.put("SDG", "Sudanese Pound");
		COUNTRY_MAP.put("SRD", "Surinam Dollar");
		COUNTRY_MAP.put("NOK", "Norwegian Krone");
		COUNTRY_MAP.put("SZL", "Lilangeni");
		COUNTRY_MAP.put("SEK", "Swedish Krona");
		//COUNTRY_MAP.put("CHE", "WIR Euro");
		COUNTRY_MAP.put("CHF", "Swiss Franc");
		//COUNTRY_MAP.put("CHW", "WIR Franc");
		COUNTRY_MAP.put("SYP", "Syrian Pound");
		COUNTRY_MAP.put("TWD", "New Taiwan Dollar");
		COUNTRY_MAP.put("TJS", "Somoni");
		COUNTRY_MAP.put("TZS", "Tanzanian Shilling");
		COUNTRY_MAP.put("THB", "Baht");
		COUNTRY_MAP.put("USD", "US Dollar");
		COUNTRY_MAP.put("XOF", "CFA Franc BCEAO");
		COUNTRY_MAP.put("NZD", "New Zealand Dollar");
		COUNTRY_MAP.put("TTD", "Trinidad and Tobago Dollar");
		COUNTRY_MAP.put("TND", "Tunisian Dinar");
		COUNTRY_MAP.put("TRY", "Turkish Lira");
		//COUNTRY_MAP.put("TMT", "Turkmenistan New Manat");
		COUNTRY_MAP.put("AUD", "Australian Dollar");
		COUNTRY_MAP.put("UGX", "Uganda Shilling");
		COUNTRY_MAP.put("UAH", "Hryvnia");
		COUNTRY_MAP.put("AED", "UAE Dirham");
		COUNTRY_MAP.put("GBP", "Pound Sterling");
		//COUNTRY_MAP.put("UYI", "Uruguay Peso en Unidades Indexadas (URUIURUI)");
		COUNTRY_MAP.put("UYU", "Peso Uruguayo");
		COUNTRY_MAP.put("UZS", "Uzbekistan Sum");
		COUNTRY_MAP.put("VUV", "Vatu");
		COUNTRY_MAP.put("VEF", "Bolivar Fuerte");
		COUNTRY_MAP.put("VND", "Dong");
		COUNTRY_MAP.put("USD", "US Dollar");
		COUNTRY_MAP.put("XPF", "CFP Franc");
		COUNTRY_MAP.put("MAD", "Moroccan Dirham");
		COUNTRY_MAP.put("YER", "Yemeni Rial");
		COUNTRY_MAP.put("ZMK", "Zambian Kwacha");
		//COUNTRY_MAP.put("ZWL", "Zimbabwe Dollar");
		


	}
}
