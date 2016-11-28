package com.talentale.domain.employmenthistory;

public enum EmploymentType {
	PERMANENT("Permanent"),
	PARTTIME("Part time"),
	CONTRACT("Contract"),
	INTERN("Intern");
	
	private String value;
	private EmploymentType(String value) {
		this.value = value;
	}
	/**
	 * @return the value
	 */
	public String getValue() {
		return value;
	}
	/**
	 * @param value the value to set
	 */
	public void setValue(String value) {
		this.value = value;
	}
}
