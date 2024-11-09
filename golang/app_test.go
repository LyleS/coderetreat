package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFails(t *testing.T) {
	assert.False(t, BoolFunc(), "Test should fail")
}
