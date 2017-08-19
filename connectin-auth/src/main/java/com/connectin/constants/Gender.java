package com.connectin.constants;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum Gender {
    f("f"), m("m");
    private String shortName;

    Gender(String shortName) {
        this.shortName = shortName;
    }

    @JsonCreator
    public static Gender fromText(String text) {
        for (Gender r : Gender.values()) {
            if (r.getText().equals(text)) {
                return r;
            }
        }
        throw new IllegalArgumentException();
    }

    @Override
    public String toString() {
        return shortName;
    }

    public String getText() {
        return this.shortName;
    }
}
