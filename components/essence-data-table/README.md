# Essence Data Table - Data Table component.

Options:
- sort: `true` - sortable datatable
- sort: `false` (**default**) - hide the sortable datatable

### How to use
```jsx
<DataTable>
	<DataTableHeader classes={'e-text-grey-400'}>
		<DataTableRow>
			<DataTableColumn>
				<Switch
					type='checkbox'
					name='column'
					defaultValue='radio-value'
				/>
			</DataTableColumn>
			<DataTableColumn>
				Column 1
			</DataTableColumn>
			<DataTableColumn>
				Column 2
			</DataTableColumn>
			<DataTableColumn>
				Column 3
			</DataTableColumn>
		</DataTableRow>
	</DataTableHeader>

	<DataTableBody classes={'e-text-grey-700'}>
		<DataTableRow>
			<DataTableColumn>
				<Switch
					type='checkbox'
					name='column'
					defaultValue='radio-value'
				/>
			</DataTableColumn>
			<DataTableColumn>Row 1 Column 1</DataTableColumn>
			<DataTableColumn>Row 1 Column 2</DataTableColumn>
			<DataTableColumn>Row 1 Column 3</DataTableColumn>
		</DataTableRow>
		<DataTableRow>
			<DataTableColumn>
				<Switch
					type='checkbox'
					name='column'
					defaultValue='radio-value'
				/>
			</DataTableColumn>
			<DataTableColumn>Row 2 Column 1</DataTableColumn>
			<DataTableColumn>Row 2 Column 2</DataTableColumn>
			<DataTableColumn>Row 2 Column 3</DataTableColumn>
		</DataTableRow>
		<DataTableRow>
			<DataTableColumn>
				<Switch
					type='checkbox'
					name='column'
					defaultValue='radio-value'
				/>
			</DataTableColumn>
			<DataTableColumn>Row 3 Column 1</DataTableColumn>
			<DataTableColumn>Row 3 Column 2</DataTableColumn>
			<DataTableColumn>Row 3 Column 3</DataTableColumn>
		</DataTableRow>
	</DataTableBody>
</DataTable>
```

```json
{
	"header": [ 
	    "Desert (100g serving)", "Calories", "Fat (g)", "Carbs (g)", "Protein (g)", "Sodium (mg)", "Calcium (%)", "Iron (%)"
	],
	"rows": [
		["Frozen yogurt", "159", "6.0", "24", "4.0", "87", "14%", "1%"],
		["Ice cream sandwich", "237", "9.0", "37", "4.3", "129", "8%", "1%"],
		["Eclair", "262", "16.0", "24", "6.0", "337", "6%", "7%"],
		["Cupcake", "305", "16.0", "24", "6.0", "413", "3%", "6%"],
		["Gingerbread", "356", "3.7", "67", "4.3", "413", "3%", "8%"],
		["Jelly bean", "356", "16.0", "94", "4.3", "129", "8%", "16%"],
		["Lollipop", "392", "0.2", "97", "0.0", "50", "0%", "2%"],
		["Honeycomb", "408", "3.2", "87", "0.0", "129", "4%", "45%"],
		["Donut", "452", "25.0", "51", "4.9", "326", "0%", "22%"],
		["KitKat", "518", "26.0", "65", "7.0", "54", "8%", "6%"]
	]
}
```