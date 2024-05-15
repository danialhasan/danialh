export interface AppraisalMetadata {
	fileName: string;
	appraisalCompany: string;
	address: string;
	phone: string;
	fax: string;
	website: string;
	clientFileNumber: string;
	appraisalFileNumber: string;
}

export interface SubjectPropertyIdentification {
	address: string;
	city: string;
	county: string;
	state: string;
	zip: string;
	legalDescription: string;
	taxParcelNumber: string;
	realEstateTaxes: string;
	taxYear: string;
}

export interface SubjectPropertyHistory {
	ownerOfRecord: string;
	descriptionOfSales: string;
	analysisOfAgreements: string;
}

export interface ReconciliationsAndConclusions {
	opinionOfValueAsOf: string;
	valueBySalesComparisonApproach: string;
	valueByCostApproach: string;
	valueByIncomeApproach: string;
	finalValueReconciliation: string;
}

export interface AssignmentParameters {
	intendedUsers: string;
	intendedUse: string;
	typeOfValue: string;
	effectiveDateOfValue: string;
}

export interface ScopeOfWork {
	extentOfPropertyInspection: string;
	dateOfInspection: string;
	dataSourcesUtilized: string;
}

export interface MarketAreaAnalysis {
	location: string;
	builtUp: string;
	growth: string;
	supplyDemand: string;
	valueTrend: string;
	typicalMarketingTime: string;
}

export interface SiteAnalysis {
	dimensions: string;
	area: string;
	view: string;
	shape: string;
	drainage: string;
	utility: string;
}

export interface HighestBestUseAnalysis {
	currentUse: string;
	proposedUse: string;
	summary: string;
}

export interface ImprovementsAnalysis {
	generalDesign: string;
	exterior: string;
	interior: {
		flooring: string;
		walls: string;
		kitchen: {
			countertops: string;
			appliances: string;
		};
	};
}

export interface SiteValuation {
	methodology: string;
	indicatedValue: string;
}

export interface CostApproach {
	estimatedCostNew: string;
	lessDepreciation: string;
	depreciatedValueOfImprovements: string;
}

export interface IncomeApproach {
	potentialGrossIncome: string;
	lessVacancy: string;
	netOperatingIncome: string;
	capitalizationRate: string;
	indicatedValue: string;
}

export interface SalesComparisonApproach {
	propertiesCompared: string[];
	adjustmentsMade: {
		location: string;
		size: string;
	};
	finalAdjustedValue: string;
}

export interface AppraisalReportData {
	appraisalMetadata: AppraisalMetadata;
	subjectPropertyIdentification: SubjectPropertyIdentification;
	// subjectPropertyHistory: SubjectPropertyHistory;
	reconciliationsAndConclusions: ReconciliationsAndConclusions;
	// assignmentParameters: AssignmentParameters;
	// scopeOfWork: ScopeOfWork;
	marketAreaAnalysis: MarketAreaAnalysis;
	// siteAnalysis: SiteAnalysis;
	// highestBestUseAnalysis: HighestBestUseAnalysis;
	improvementsAnalysis: ImprovementsAnalysis;
	// siteValuation: SiteValuation;
	// costApproach: CostApproach;
	// incomeApproach: IncomeApproach;
	// salesComparisonApproach: SalesComparisonApproach;
}
